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
  public successFindOne(id: string, data: any, message: string) {
    return {
      data,
      message: `${message} width ${id} is find`,
      status: 200,
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
