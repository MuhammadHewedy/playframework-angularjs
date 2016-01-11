package controllers

import play.api._
import play.api.mvc._

import play.api.libs.json.{JsNull,Json,JsString,JsValue}

class Application extends Controller {
	
	def index = Action {
        Ok(views.html.index())
	}

	def json = Action {
		
		val json: JsValue = Json.obj(
		  "name" -> "Watership Down",
		  "location" -> Json.obj("lat" -> 51.235685, "long" -> -1.309197),
		  "residents" -> Json.arr(
		    Json.obj(
		      "name" -> "Fiver",
		      "age" -> 4,
		      "role" -> JsNull
		    ),
		    Json.obj(
		      "name" -> "Bigwig",
		      "age" -> 6,
		      "role" -> "Owsla"
		    )
		  )
		)
		Ok(json)
	}
	
}
