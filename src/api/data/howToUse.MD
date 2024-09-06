
```ts

// In your component file

import { useGetData, usePostData, usePutData, useDeleteData } from './apiHooks';

const MyComponent = () => {
  // Fetching data
  const { data, error, isLoading } = useGetData<MyDataType>('myDataKey', '/api/data');

  // Posting data
  const postData = usePostData<MyDataType>('/api/data');
  
  // Updating data
  const putData = usePutData<MyDataType>('/api/data/1');
  
  // Deleting data
  const deleteData = useDeleteData('/api/data/1');

  return (
    <div>
      {isLoading ? <p>Loading...</p> : <p>Data: {JSON.stringify(data)}</p>}
      {error && <p>Error: {error.message}</p>}

      {/* Example of mutating data */}
      <button
        onClick={() => postData.mutate({ id: 1, name: 'Test' })}
      >
        Add Data
      </button>
    </div>
  );
};
```
