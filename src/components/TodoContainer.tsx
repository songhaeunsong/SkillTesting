import { getTodoApi } from '@/apis/todo';

import AlertBox from './AlertBox';
import ServerInputModal from './ServerInputModal';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const TodoContainer = () => {
  const { data, isPending } = getTodoApi();

  if (isPending) {
    return <div>loading...</div>;
  }

  return (
    <main className='flex h-screen w-full flex-col justify-center'>
      <div className='mx-auto flex w-[600px] flex-col gap-5'>
        <div className='flex justify-end'>
          <ServerInputModal />
        </div>
        {data ? (
          <>
            <TodoInput />
            <div className='max-h-[600px] overflow-x-hidden overflow-y-hidden overflow-y-scroll rounded-[8px] border border-gray-200 shadow-xl'>
              {data.map(({ content, completed, id }) => (
                <TodoItem
                  checked={completed}
                  todo={content}
                  todoId={id}
                  key={`${content}-${id}`}
                />
              ))}
            </div>
            <span className='mt-[40px]'>Made By HoberMin / songhaeunsong</span>
          </>
        ) : (
          <AlertBox />
        )}
      </div>
    </main>
  );
};

export default TodoContainer;
