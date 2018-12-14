module.exports =  {
    title: {
        text: '渠道每周爬取数量',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#c23531'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['前程无忧','BOSS直聘','拉勾网','智联招聘','大街网']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'前程无忧'},
                {value:310, name:'BOSS直聘'},
                {value:274, name:'拉勾网'},
                {value:235, name:'智联招聘'},
                {value:400, name:'大街网'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};;
