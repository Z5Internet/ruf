<?php namespace z5internet\ReactUserFramework\App\Http\Controllers\Auth;

use z5internet\ReactUserFramework\App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use z5internet\ReactUserFramework\App\Http\Controllers\User\UserController;

use Symfony\Component\HttpFoundation\Cookie;

use Tymon\JWTAuth\Http\Parser\AuthHeaders;

use Symfony\Component\HttpKernel\Exception\HttpException;

class AuthenticationController extends Controller {

	private $request;

	public $token;

	public $cookieOrHeader;

	private $jwt;

	public function __construct(Request $request) {

		$this->request = $request;

		if (!$request->input('noLogin')) {

			$this->getToken();

		}

		if ($this->token) {

			$this->jwt = app('tymon.jwt.auth')->setToken($this->token);

		}

	}

	public function checkLoggedIn() {

		if (!$this->checkAuthentication()) {

			abort(401);

		}

	}

	public function checkAuthentication() {

		if ($this->token) {

			try {

				$payload = app('tymon.jwt.auth')->setToken($this->token)->getPayload();

		    } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

				$token = $this->refreshToken();

				$this->token = $token;

				if (!$this->token) {

					return;

				}

				$payload = app('tymon.jwt.auth')->setToken($token)->getPayload();


			} catch (\Exception $e) {

				return;

			}

			$abc = $payload->get('abc');

			$user = UserController::getUser($payload->get('sub'));

			if (!$user) {

				return;

			}

			$check = md5($user->password);

			if (!$abc || ($abc != $check)) {

				return;

			}

			return $user;

		}

	}

	public function cookie($value) {

		$cookieSettings = $this->getCookieSettings();

		return new Cookie(
		    'rufT',
		    $value?app('encrypter')->encrypt($value):'',
		    time()+$cookieSettings['time'],
		    '/',
		    $this->getDomain(),
		    $cookieSettings['secure'],
		    true
		);

	}

	private function getCookieSettings() {

		return config('react-user-framework.website.cookie');

	}

	private function getDomain() {

		$cookieSettings = $this->getCookieSettings();

		return array_get($cookieSettings, 'domain')?$cookieSettings['domain']:$this->request->getHttpHost();

	}

	private function getToken() {

		if ($token = $this->getTokenFromHeader()) {

			$this->cookieOrHeader = 'header';

			$this->token = $token;

		} else if ($token = $this->getTokenFromCookie()) {

			$this->cookieOrHeader = 'cookie';

			$this->token = $token;

		}

		return $this;

	}

	private function getTokenFromCookie() {

		return $this->decryptToken($this->request->cookie('rufT'));

	}

	private function getTokenFromHeader() {

		return (new AuthHeaders)->parse($this->request);

	}

	private function decryptToken($value) {

		if (!$value) {

			return;

		}

		try {

			$v = app('encrypter')->decrypt($value);

		} catch(\Exception $e) {

			return null;

		}

		return $v;

	}

	public function refreshToken() {

		if (!$this->token) {

			return;

		}

		try {

			return $this->jwt->refresh();

		} catch (\Exception $e) {}

	}

}
