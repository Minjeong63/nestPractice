import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = [];
  // private을 사용함으로써 다른 컴포넌트에서 boards를 수정할 수 없게 해줌

  getAllBoards() {
    return this.boards;
  }
}
