import { v4 as uuidV4 } from "uuid";

class User {
  // Os models representam a tipagem de uma entidade representada no banco de dados

  id?: string;

  name: string;

  admin: boolean;

  email: string;

  created_at: Date;

  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.admin = false;
    }
  }
}

export { User };
