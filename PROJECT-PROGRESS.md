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

## 2026-10-22 合作品牌展示 Section
- 新增 `sections/brand-partners.liquid`（通用命名），保留参考布局：居中标题、描述、桌面三列/手机单列图片轮播、左右箭头、圆点、底部 NDA。
- 默认 Craftaurum 英文文案；图片均通过 Theme Editor block `image_picker` 上传，未上传采用 Shopify `image` 占位图；不引用原站图片或 URL。
- 已提交至 GitHub main：`685b15ea`。未改首页 `templates/index.json`，请在主题编辑器按需添加并上传图片。
- 代码已提交；Shopify Sync、Theme Check 与三端真实测试尚待确认。

## 2026-10-22 首页新增图片轮播及图文介绍
- `sections/brand-partners.liquid` 的后台 Section / Preset 名称改为 **图片轮播**（原 `brand-partners` 文件路径不变以保留兼容）；图片 Block 使用通用名称。
- 新增 `sections/image-text-feature.liquid`，后台名 **图文介绍**。居中标题、顶部黑色引导条、左右图文双列、可选底部 CTA；PC 图片左右可切换，Mobile 单列；Image Picker 未设置则使用 Shopify 原生占位图。
- `templates/index.json` 已挂载：原有 hero 后依次是图片轮播、S925 银饰图文介绍（文左图右）、黄金珠宝图文介绍（图左文右），后面保留原产品列表。
- 两个实例写入 Craftaurum 专属英文内容，没有引用 Sunrise-jewel 的文案或素材；图片全部留给 Theme Editor 后台上传。
- 按钮链接未设置：顶部引导条渲染静态标签、第一组底部 CTA 禁用，避免虚假跳转；上线前在编辑器设置真实链接。
- GitHub 已提交；Shopify 主题同步、Theme Check 和三端实际 UI 仍未现场验证。

## 2026-10-22 后续全局设置与首页文案调整
- 以 main 当前文件为基准检查；当前首页已由用户在编辑器建立 2 个 `image-text-feature` 实例，直接复用 `image_text_feature_NWRYeQ` 和 `image_text_feature_YzURpA`，未创建重复实例、未重置图片字段。
- Theme Settings 按钮：去掉「胶囊标签」说明及半径编辑控件；原生胶囊标签 CSS 保留并设置 40px 兜底，以免影响筛选/搜索。一级、二级 Hover 设置移回对应按钮分组。
- Typography：移动端段落与 H1–H6 设置分别紧邻对应桌面字号设置。移动端未指定时仍继承 Horizon。
- 通用图文介绍新增 Section 后台全局 H1–H6 字号预设选择（标题 H2、副标题 H3、正文 H4）和上/下按钮主、次、文字链接样式选择。通用图片轮播增加标题 H2、正文 H4、底部说明 H5 字号预设。
- 全局文本 CTA 按钮链接样式增加 » 前缀（排除 SVG/图标操作控件），顶部静态标签也增加 »；其余原生操作按钮避免添加不合适的符号。
- 首页银饰内容更新：Sterling Silver 制造、设计、铸造、抛光、镀层、定制范围；左文右图；底部 Start Your Project 链接复用当前接洽页地址。黄金内容更新：定制黄金、金属选择与镀层、工艺及品牌合作；左图右文；无底部 CTA。
- 已静态验证两份 Section schema、全局设置 JSON、当前 index JSON 均可解析，首页实例次序和左右位置正确。
- GitHub 已提交；Shopify 同步 / Theme Editor / 三端可视化 / Theme Check 仍待确认。以上全局 CTA 前缀只覆盖符合选择器的文本链接，不涵盖第三方 App 与纯图标按钮。

## 2026-10-22 珠宝系列图片展示 + 全局字号调整
- 新增 `sections/image-collection-grid.liquid`，后台名称「珠宝系列图片展示」。根据参考源码呈现桌面首行两张大图、次行三张卡片；卡片居中标题、蒙层、hover 蒙层加深、内部线框显现与缩放动画。图片未上传时为 Horizon SVG 占位。
- 每张卡片支持独立标题、上传图片、系列绑定或自定义 URL；无 URL 不生成空链接。默认图片由用户在 Theme Editor 填写，未引入外部站图片。
- 手机端标准：**默认**独立开放「每行 1–4 张」（range）与「网格/轮播」（select）；默认 2 列/网格。以后类似列表、图片卡片模块按此实施，除非有特别指示。轮播支持触摸横滑与箭头导航。
- 蒙层默认透明度 25%，hover 50%；边框动画为缩放淡入，作用域限本 Section；低动态偏好时关闭动画。
- 首页只追加一个 `image_collection_grid_craftaurum`，顺序在现有两个图文介绍之后；保留原 Hero、轮播与两组图文实例、全部已配置字段。
- 全局 Typography 目标桌面：正文16、H1 40、H2 32、H3 24、H4 18、H5 16、H6 14（px）；手机：正文14、H1 32、H2 26、H3 20、H4 16、H5 15、H6 14（px）。同时修改 schema 新建默认值与 `settings_data.json` 当前配置。
- GitHub 已提交，相关 Section Schema、settings JSON、首页 JSON 可解析。Shopify Theme Check、Theme Editor 保存和真实浏览器视觉/交互未执行；需要独立核实同步。

## 2026-10-23 全局 Typography 与按钮字号精调

本次改动仅基于当前 `main` 分支完成，不改版式、模板实例或媒体绑定。

### 字号预设与步进
| 类型 | 桌面默认 (px) | 手机默认 (px) |
| --- | ---: | ---: |
| 正文 | 16 | 14 |
| H1 | 40 | 32 |
| H2 | 32 | 26 |
| H3 | 24 | 20 |
| H4 | 18 | 16 |
| H5 | 16 | 14 |
| H6 | 14 | 12 |
| 一级按钮 | 16 | 14 |
| 二级按钮 | 16 | 14 |

- 全局文字的桌面/手机设置项全部改为每项间隔 **2px**，无不连续档位。标题桌面候选 12–96px、手机候选 12–64px；正文桌面 12–32px、手机 12–28px。
- 移动端字号控件移除 `inherit` / 跟随桌面选项，并写入明确的移动端默认字号。Liquid 同时覆盖 `--font-size--*` 和 `--font-*--size` CSS tokens。
- 主、次按钮各增加桌面与手机独立字号（每 2px 一档，12–28px）；接入 `snippets/theme-styles-variables.liquid` 和 `assets/base.css` 原生按钮选择器。
- 一级、二级按钮 Hover 背景和边框默认 `#E1E3E6`，Hover 文字默认 `#1B1B1B`（浅色背景上保持对比），均可在 Theme Settings 单独调整。Custom 按钮仍保留自定义样式的回退路径。
- `config/settings_schema.json`、`config/settings_data.json` 的 current 与 Horizon 主题 preset 同步为这套默认值；其余配置保留。
- 已读取 GitHub 最新代码并进行静态核查：全部字号选项为 2px 等差、当前值/预设值合法、按钮颜色与变量绑定存在、JSON 可解析。
- **未执行 Shopify 线上同步确认、Shopify CLI theme check 或真实三端前台 QA**；需分别验证，不能将 GitHub 提交等同于已上线。

## 2026-10-23 Horizon 原生化统一重构（单批次）

### 目标与保留原则
- 保留原有首页现存 Section IDs、`brand-partners` / `image-text-feature` / `image-collection-grid` 类型、原 Block Type、图片选择器和业务内容字段，防止 Theme Editor 绑定丢失。
- 视觉参照 Sunrise-jewel：Logo 三列图片轮播；银饰/黄金双列交错图文；2+3 系列图片展示和 Hover 蒙层/线框动画。
- 组件原则：CTA 使用一个公共 `craftaurum-cta`；轮播使用 Horizon 原生 `slideshow`、`slideshow-slide`、`slideshow-controls`；卡片由公共 `craftaurum-collection-card` 输出。
- 功能性控件（轮播箭头、购物车、搜索等）继续使用 Horizon 原生按钮机制，**不**向其强加 CTA 前缀。

### 修改文件
- `snippets/craftaurum-cta.liquid`：新增共用 CTA。主/次/文字/自定义样式、链接、block 属性、尺寸、默认 “»” 标识均由同一个组件渲染。
- `snippets/button.liquid`、`blocks/button.liquid`：Horizon 原有 Button Theme Block 委派到上述 CTA，保留 block 宽度、目标地址、新窗口与自定义颜色。
- `assets/base.css`：移除之前全局 `::before` 插入 “»” 的粗放规则，修复对导航/功能按钮布局的干扰。
- `sections/image-text-feature.liquid`：保留已配置的两个实例，接入 Horizon page-width / spacing-style / H1-H6 预设及公共 CTA；精简设置，并保留左右图文、原图片及链接字段；新加可选纯文本副标题以匹配独立副标题预设，不强迫顶部 CTA 使用副标题字号。
- `sections/brand-partners.liquid`：改用 Horizon Slideshow 代替自写 setInterval/ResizeObserver/scrollTo；原 Logo Block 图片与文字保持；PC 三列，Mobile 1-4 项/轮播或真正的独立网格；轮播使用原生箭头、圆点、自动播放逻辑。
- `snippets/craftaurum-collection-card.liquid`：新增共用图片卡片，支持 image_picker，缺图时回退到绑定的 collection.image；标题和链接也支持独立设置或 collection 回退。
- `sections/image-collection-grid.liquid`：保留 PC 2+3 布局、默认蒙层25%/Hover50%与边框动画，使用公共卡片与 Horizon 原生手机轮播；Mobile 1-4 列/网格或轮播。增加 Horizon 背景色/对比度机制，默认背景#F4F4F4。
- `templates/index.json`：核对后发现用户当前索引丢失系列图片展示，按之前明确要求恢复在银饰与黄金图文之后；其他四个已有实例及内容不重建。

### 静态核查
- 自定义 Section Schema 可解析；字段和 Block Type 与当前 index.json 保持兼容。
- 三个 Section 均不再有自写 `<script>`；Section CSS 改为 `{% stylesheet %}` 与实例根节点 CSS 变量。
- CTA 箭头只在公共 CTA 组件渲染；全局 CSS 的粗放伪元素方案已移除。
- 当前模板次序：Hero → 图片轮播 → 银饰图文 → 黄金图文 → 珠宝系列图片展示。
- 仍需 Shopify CLI Theme Check、Theme Editor 添加/排序/图片保存与真机桌面/平板/手机验证；**目前仅能确认 GitHub 源码提交和静态一致性，不可宣称前台已验收。**

## 2026-10-23 CTA 重复箭头修复
- 现象：首页图文介绍的顶部 S925 Jewelry Custom 按钮出现 `» »`。
- 代码检查：当前 `index.json` 的 `top_label` 为纯文本（无符号），公共 `craftaurum-cta.liquid` 自带一次内联箭头。截图中的额外符号来源尚未通过前台 DOM 验证。
- 源头修复：仅修改共用 `snippets/craftaurum-cta.liquid`，先清理可能存在于按钮文本开头的旧 `»` / `›`，统一由共用 CTA 输出单一标记；用高针对性的 `.ca-cta.ca-cta::before` 阻止旧 CSS 伪元素再额外输出箭头；顺便修复 `show_indicator: false` 被 `default` 覆盖的问题。
- 影响范围：沿用公共 CTA 的图文介绍与 Horizon 导航型 Button Block；**不改变**轮播控件、购物车按钮和首页内容/图片绑定。
- GitHub 修复提交：`b03337104bb02152e54bc124c03f0aed99fad484`。Shopify Theme Editor 和前台 DOM 未实测，需确认最新代码已同步。
