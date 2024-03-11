import { Injectable } from '@nestjs/common';

@Injectable()
export class ResponseService {
  constructor() {}
  public successCreateOne(data: any, message: string) {
    return {
      data,
      message: `${message} is created`,
      status: 201,
      success: true,
    };
  }
  public successFindOne(
    status: number,
    id: string,
    data: any,
    message: string,
  ) {
    return {
      id,
      data,
      message,
      status,
      success: true,
    };
  }
  public successFindAll(data: any, message: string) {
    return {
      data,
      message: `${message} is find all`,
      status: 200,
      success: true,
    };
  }
  public successUpdateOne(id: string, message: string) {
    return {
      message: `${message} width ${id} is updated`,
      status: 201,
      success: true,
    };
  }
  public successDeleteOne(id: string, message: string) {
    return {
      message: `${message} width ${id} is deleted`,
      status: 201,
      success: true,
    };
  }
}
