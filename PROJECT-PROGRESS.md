# Craftaurum — 项目进度

## 基准
- GitHub: `LoQin700/-craftaurum`
- Branch: `main`
- Theme: Shopify Horizon 4.1.3（依据 `config/settings_schema.json`）
- General rules: `SHOPIFY-HORIZON-DEVELOPMENT-GUIDE.md`

## 2026-10-22 全局第一步（代码实施记录）
| 项目 | GitHub 代码状态 | Shopify Sync / Theme Editor / 三端实测 |
| --- | --- | --- |
| PC/Mobile 段落及 H1–H6 | 已增加全局 Mobile 可选字号，默认 inherit；PC 保持 Horizon 原生 | 待验证 |
| 购物车覆盖式抽屉 | 已对购物车单独启用 overlay-only / no-persist，修改原生 drawer 及 squeeze 协调；其他 drawer 保持现状 | 待验证 |
| 一级/二级按钮 Hover | 已增加可选的全局背景、文本、边框 Hover 配置，保持原生智能回退；自定义按钮复用原有 resolve-custom-hover | 待验证 |
| 手机端多级菜单 | Horizon 原有逐级进入子菜单；已修改返回时的子菜单状态保持，尚需实机确认各菜单样式/模式 | 待验证 |
| 手机端一级菜单字号 | 已优先继承全局移动端 H5 变量，未配置移动端字号时跟随 Horizon 默认 | 待验证 |
| 产品卡及徽章 | 已检查文件路径存在：`blocks/_product-card.liquid`、`snippets/product-card.liquid`、`snippets/product-badges-styles.liquid`，未更改商品卡设计 | 待功能检查 |
| 页面宽度 / 断点 | 保留 Horizon 原有 page width 和 749 / 990 断点，不改变商店配置 | 待实测 |

## 当前限制
- GitHub 修改已提交到 main；**未直接确认 Shopify 店铺同步、在线渲染、Theme Editor 保存状态或真实三端 QA**。
- 本次没有修改 `config/settings_data.json`、首页 JSON、商品数据或店铺内容。
- 后续应验证购物车蒙层 / 外部点击 / Escape / 滚动锁定 / 折扣 / 数量 / 结账；PC、Tablet、Mobile 字号；主次按钮 Hover；多级菜单前进/返回和原位置恢复。
- 若 Shopify Theme Check 报错，先以仓库当前文件和 CLI 结果定位问题，不应通过堆叠全局 CSS 修补。
