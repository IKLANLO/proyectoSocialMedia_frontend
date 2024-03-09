import { Input, Space } from 'antd'

const Search = () => {
  const { Search } = Input
  const onSearch = (value, _e, info) => console.log(info?.source, value)

  return (
    <div>
      <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{
          width: 200,
          marginTop: '.375rem',
        }}
      />
    </div>
  )
}

export default Search
