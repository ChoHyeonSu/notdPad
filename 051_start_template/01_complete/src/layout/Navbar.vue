<template>
      <b-navbar toggleable="lg" type="dark" variant="primary">
			<b-navbar-brand href="#">My App</b-navbar-brand>
			<template v-if="menuList && menuList.length">
				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav>
						<template v-for="(item, index) in menuList" >
							<template v-if="item.children">
								<b-nav-item-dropdown :text="item.label" :key="index">
									<b-dropdown-item v-for="(subItem, index) in item.children" :key="'sub_'+index"
										:to="{name:subItem.name}" active-class="active" exact>
										{{subItem.label}}
									</b-dropdown-item>
								</b-nav-item-dropdown>
							</template>
							<template v-else>
								<b-nav-item :key="index"
									:to="{name:item.name}" active-class="active" exact>
									{{item.label}}
								</b-nav-item>
							</template>
						</template>
					</b-navbar-nav>

					<b-navbar-nav class="ml-auto">
						<b-nav-item key="login" right
							:to="{name:'login'}" active-class="active" exact>Login</b-nav-item>
					</b-navbar-nav>
				</b-collapse>
			</template> 
		</b-navbar>
</template> 

<script>
	export default {
		
		data(){
			return {
				 menuList:[{
					name:"home",
                    label: "홈"
                },{
                    name:"group01Home",
					label: "그룹01",
					children:[{
						name:"group01Board",
						label: "board"
					},{
						name:"group01Sample",
						label: "sample"
					}]
                },{
                    name: "group02ImageCard",
                    label: "그룹02"
                }],
			}
		}
	}
</script>

<style scoped>
	.active {
		color:#ffffff !important;
	}
</style>