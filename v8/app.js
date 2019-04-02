new Vue ({
    el: "#app",
    data: {
        msg: "Hello World",
        count: 0
    },
    methods: {
        getMsg: function() {
            return this.msg;
        },
        add5: function() {
            this.count+=5;
        },
        add: function() {
            this.count++;
        }
    }
})