// services/userService.ts

export interface User {
  id: string;
  name: string;
  age: number;
}

const users: User[] = [
  { id: '1', name: 'John Doe', age: 30 },
  { id: '2', name: 'Jane Smith', age: 25 },
  { id: '3', name: 'Kim', age: 20 },
  // 필요한 만큼의 샘플 데이터를 추가합니다.
];

/**
 * 주어진 ID에 해당하는 사용자를 반환합니다.
 * @param id - 사용자의 ID
 * @returns 사용자 객체 또는 undefined
 */
export const getUserById = (id: string): User | undefined => {
  return users.find(user => user.id === id);
};

/**
 * 모든 사용자 목록을 반환합니다.
 * @returns 사용자 배열
 */
export const getAllUsers = (): User[] => {
  return users;
};
