'use client';

import { ModalWindow } from './ModalWindow';
import { CreateUserForm } from './CreateUserForm';

export const CreateUserModalWindow = () => {
  return (
    <ModalWindow title="Test Modal" trigger={<button>Create User</button>}>
      {({ closeModal }) => <CreateUserForm onClose={closeModal} />}
    </ModalWindow>
  );
};
