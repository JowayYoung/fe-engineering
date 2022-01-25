module.exports = {
	allowBreakingChanges: ["feat", "fix"],
	allowCustomScopes: true,
	scopes: [],
	types: [{
		name: "功能：新增功能，迭代项目需求 (feat)",
		value: "feat"
	}, {
		name: "修复：修复缺陷，修复上一版本存在问题 (fix)",
		value: "fix"
	}, {
		name: "文档：更新文档，仅改动文档不改动代码 (docs)",
		value: "docs"
	}, {
		name: "样式：变动格式，不影响代码逻辑 (style)",
		value: "style"
	}, {
		name: "重构：重构代码，非新增功能也非修改缺陷 (refactor)",
		value: "refactor"
	}, {
		name: "性能：优化性能，提高代码执行性能 (perf)",
		value: "perf"
	}, {
		name: "测试：新增测试，追加测试用例验证代码 (test)",
		value: "test"
	}, {
		name: "构建：更新构建，改动构建工具或外部依赖 (build)",
		value: "build"
	}, {
		name: "脚本：更新脚本，改动CI或执行脚本配置 (ci)",
		value: "ci"
	}, {
		name: "事务：变动事务，改动其他不影响代码的事务 (chore)",
		value: "chore"
	}, {
		name: "回滚：回滚版本，撤销某次代码提交 (revert)",
		value: "revert"
	}, {
		name: "合并：合并分支，合并分支代码到其他分支 (merge)",
		value: "merge"
	}, {
		name: "同步：同步分支，同步分支代码到其他分支 (sync)",
		value: "sync"
	}, {
		name: "改进：改进功能，升级当前功能模块 (impr)",
		value: "impr"
	}]
};