import React from 'react';
import { Table, Divider, Tag  } from 'antd';
import './User.css'

const columns = [{
    title: '管理员',
    dataIndex: 'name',
  }, {
    title: '职位',
    dataIndex: 'leader',
  }, {
    title: '更新日期',
    dataIndex: 'date',
  }, {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
      </span>
    ),
  }, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;" >删除</a>
        <Divider type="vertical" />
        <a href="javascript:;">编辑</a>
      </span>
    ),
  }];
  
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `王xx`,
      tags: ['成功', '多金'],
      leader: 'ceo',
      date: `2018-12-12`,
    });
  }
class User extends React.Component{
    constructor(props){
       super(props)
       this.state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading:true
      }
    }
     
    componentDidMount(){
        setTimeout(() => {
            this.setState({loading:false})
        }, 1000);
    }

      onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
      }
    
    
     render(){
        function deleteuser(){
              
        }
        const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [{
        key: 'all-data',
        text: 'Select All Data',
        onSelect: () => {
          this.setState({
            selectedRowKeys: [...Array(46).keys()], // 0...45
          });
        },
      }, {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          this.setState({ selectedRowKeys: newSelectedRowKeys });
        },
      }, {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          this.setState({ selectedRowKeys: newSelectedRowKeys });
        },
      }],
      onSelection: this.onSelection,
    };
    return (
        <div style={{background:'white'}}>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} loading={this.state.loading} />
      </div>
    );
     }
}
export default User