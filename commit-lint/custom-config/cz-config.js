module.exports = {
	allowBreakingChanges: ["feat", "fix"],
	allowCustomScopes: true,
	scopes: [],
	types: [{
		name: "feat	功能：新增功能，迭代项目需求",
		value: "feat"
	}, {
		name: "fix 修复：修复缺陷，修复上一版本存在问题",
		value: "fix"
	}, {
		name: "docs	文档：更新文档，仅改动文档不改动代码",
		value: "docs"
	}, {
		name: "style 样式：变动格式，不影响代码逻辑",
		value: "style"
	}, {
		name: "refactor	重构：重构代码，非新增功能也非修改缺陷",
		value: "refactor"
	}, {
		name: "perf	性能：优化性能，提高代码执行性能",
		value: "perf"
	}, {
		name: "test	测试：新增测试，追加测试用例验证代码",
		value: "test"
	}, {
		name: "build 构建：更新构建，改动构建工具或外部依赖",
		value: "build"
	}, {
		name: "ci 脚本：更新脚本，改动CI或执行脚本配置",
		value: "ci"
	}, {
		name: "chore 事务：变动事务，改动其他不影响代码的事务",
		value: "chore"
	}, {
		name: "revert 回滚：回滚版本，撤销某次代码提交",
		value: "revert"
	}, {
		name: "merge 合并：合并分支，合并分支代码到其他分支",
		value: "merge"
	}, {
		name: "sync	同步：同步分支，同步分支代码到其他分支",
		value: "sync"
	}, {
		name: "impr 改进：改进功能，升级当前功能模块",
		value: "impr"
	}]
};