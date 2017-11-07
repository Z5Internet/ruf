<?php namespace z5internet\ReactUserFramework\App\Http\Controllers\Routing;

use z5internet\ReactUserFramework\App\Http\Controllers\Controller;

use z5internet\ReactUserFramework\App\Http\Controllers\Image\ImageController;

use Illuminate\Http\Request;

use JWTAuth;

class imagesRoutes extends Controller {

	public function showImage(ImageController $ImageController, $img) {

		return (new ImageController)->get($img);

	}

}
