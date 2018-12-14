module.exports = {
    backgroundColor: '#fff',

    title: {
        text: '渠道每天爬取数量',
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
    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'前程无忧'},
                {value:310, name:'BOSS直聘'},
                {value:274, name:'拉勾网'},
                {value:235, name:'智联招聘'},
                {value:400, name:'大街网'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: '#c23531'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#c23531'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                // normal: {
                //     color: '#c23531',
                //     shadowBlur: 200,
                //     shadowColor: 'rgba(0, 0, 0, 0.5)'
                // }
                emphasis: {
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
