import { Controller, Get, Response, Route } from "@tsoa/runtime";

@Route('IncorrectResponseHeader')
@Response<null, null>(200)
export class IncorrectResponseHeaderController extends Controller {
  @Get()
  public async handler(): Promise<void> {
    return;
  }
}
