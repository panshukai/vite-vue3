<template>
<div class="wrap">
    <h2>航班信息</h2>
    <Row>
        <Col span="20">
			<Tabs v-model:active="active" type="card">
				<Tab v-for="(nav, index) in navlist" :title="nav.name" :name="index">
				</Tab>
			</Tabs>
        </Col>
        <Col span="4">
        	<Button icon="replay" size="small" round type="primary"></Button>
        </Col>
    </Row>
    <Row>
        <Col>
			<Form @submit="onSubmit">
				<CellGroup inset>
					<Field
					v-model="form.username"
					name="用户名"
					label="用户名"
					placeholder="用户名"
					:rules="[{ required: true, message: '请填写用户名' }]"
					/>
					<Field
					v-model="form.password"
					type="password"
					name="密码"
					label="密码"
					placeholder="密码"
					:rules="[{ required: true, message: '请填写密码' }]"
					/>
					<Cell title="选择单个日期" :value="date" @click="show = true" />
				</CellGroup>
				<div>
					<Button round block type="primary" native-type="submit">
					提交
					</Button>
				</div>
				
				<Calendar v-model:show="show" @confirm="onConfirm" />
			</Form>
        </Col>
    </Row>
</div>
</template>

<script setup>
import {
    ref,
    reactive,
    getCurrentInstance,
    onMounted
} from 'vue';
import {
    Tabs,
    Tab,
    Row,
    Col,
	Button,
	Form,
	CellGroup,
	Field,
	Cell,
	Calendar,
} from 'vant';
const { proxy, ctx } = getCurrentInstance();
   
const active = ref(0);
const show = ref(false);
const form = reactive({
	username: '',
	password: '',
});
console.log(proxy.$interfaces, ctx.$data);
const navlist = reactive([{
    name: '全部',
    path: '/electronic-release/flight-info',
}, {
    name: '飞行',
    path: '/electronic-release/guarantee-apply',
}, {
    name: '客舱',
    path: '/electronic-release/guarantee-node',
}, {
    name: '保卫',
    path: '/electronic-release/run-communicate',
}])

async function onSubmit(){
	let params = {
		LoginName: form.username,
		Password: form.password,
	}
	let res = await proxy.$interfaces.login(params);
	console.log(res);
}

function onConfirm(){

}
</script>

<style lang="less" scoped>
h2 {
    font-size: 16px;
    font-weight: bold;
    margin: 10px auto;
}
</style>
