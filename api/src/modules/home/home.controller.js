import homeService from "./home.service.js";
import { ControllerBase } from "../../controllers/ControllerBase.js";

function index(req, res) {
  const data = homeService.getHello();

  return ControllerBase.success(res, data);
}

export default {
  index: ControllerBase.handle(index),
};