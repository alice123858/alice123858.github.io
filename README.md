# 个人简历网站

一个现代化、响应式的个人简历网站，展示您的专业技能、工作经验和项目作品。

## ✨ 功能特点

- 🎨 **现代化设计** - 采用最新的设计趋势，界面美观大方
- 📱 **完全响应式** - 适配桌面、平板和手机等各种设备
- ⚡ **高性能** - 优化的代码结构，加载速度快
- 🎭 **丰富动画** - 滚动动画、悬停效果等交互体验
- 📧 **联系表单** - 内置联系表单，方便访客联系
- 🔍 **SEO友好** - 语义化HTML结构，便于搜索引擎收录
- ♿ **无障碍访问** - 支持键盘导航和屏幕阅读器

## 🚀 快速开始

1. **下载文件**
   - 将所有文件下载到本地文件夹

2. **个性化定制**
   - 编辑 `index.html` 文件，替换个人信息
   - 修改 `styles.css` 文件，调整颜色和样式
   - 根据需要调整 `script.js` 中的功能

3. **部署上线**
   - 上传到任何Web服务器
   - 或使用GitHub Pages、Netlify等免费托管服务

## 📁 文件结构

```
resume-website/
├── index.html          # 主页面文件
├── styles.css          # 样式文件
├── script.js           # JavaScript功能文件
└── README.md           # 项目说明文件
```

## 🎨 自定义指南

### 修改个人信息

在 `index.html` 文件中找到以下部分进行修改：

1. **姓名和职位**
   ```html
   <h2>张三</h2>  <!-- 修改为您的姓名 -->
   <p>全栈开发工程师</p>  <!-- 修改为您的职位 -->
   ```

2. **个人简介**
   ```html
   <p class="hero-description">
       我是一名充满激情的开发者，专注于创建优秀的用户体验和高质量的代码。
       拥有5年以上的开发经验，擅长前端和后端技术。
   </p>
   ```

3. **联系信息**
   ```html
   <p>zhangsan@example.com</p>  <!-- 修改为您的邮箱 -->
   <p>+86 138 0000 0000</p>     <!-- 修改为您的电话 -->
   ```

### 修改技能

在技能部分，您可以：
- 添加或删除技能项
- 调整技能熟练度百分比
- 修改技能分类

```html
<div class="skill-item">
    <div class="skill-name">技能名称</div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 90%"></div>
    </div>
</div>
```

### 修改工作经验

在时间线部分添加您的工作经验：

```html
<div class="timeline-item">
    <div class="timeline-content">
        <div class="timeline-header">
            <h3>职位名称</h3>
            <span class="company">公司名称</span>
            <span class="period">2020 - 2022</span>
        </div>
        <p>工作描述...</p>
        <ul>
            <li>工作成就1</li>
            <li>工作成就2</li>
        </ul>
    </div>
</div>
```

### 修改项目展示

在项目部分添加您的项目：

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-project-icon"></i>
    </div>
    <div class="project-content">
        <h3>项目名称</h3>
        <p>项目描述...</p>
        <div class="project-tech">
            <span>技术栈1</span>
            <span>技术栈2</span>
        </div>
        <div class="project-links">
            <a href="#" class="btn btn-small">查看演示</a>
            <a href="#" class="btn btn-small btn-outline">源代码</a>
        </div>
    </div>
</div>
```

### 修改颜色主题

在 `styles.css` 文件中修改主要颜色：

```css
:root {
    --primary-color: #2563eb;      /* 主色调 */
    --secondary-color: #1d4ed8;    /* 次要色调 */
    --accent-color: #ffd700;       /* 强调色 */
    --text-color: #333;            /* 文字颜色 */
    --bg-color: #fafafa;           /* 背景颜色 */
}
```

## 🌟 特色功能

### 1. 响应式导航栏
- 固定顶部导航
- 移动端汉堡菜单
- 平滑滚动到锚点

### 2. 技能进度条
- 动态加载动画
- 悬停效果
- 百分比显示

### 3. 时间线展示
- 工作经验时间线
- 左右交替布局
- 响应式适配

### 4. 项目卡片
- 悬停动画效果
- 技术标签
- 链接按钮

### 5. 联系表单
- 表单验证
- 成功/错误提示
- 自动重置

### 6. 滚动动画
- 元素进入视口时的淡入动画
- 技能进度条动画
- 平滑滚动效果

## 📱 移动端优化

- 触摸友好的按钮大小
- 适配小屏幕的布局
- 优化的导航体验
- 手势支持

## 🔧 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 现代样式和动画
- **JavaScript (ES6+)** - 交互功能
- **Font Awesome** - 图标库
- **Google Fonts** - 字体

## 🌐 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 📄 许可证

本项目采用 MIT 许可证，您可以自由使用和修改。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📞 支持

如果您在使用过程中遇到问题，请：

1. 查看本文档
2. 检查浏览器控制台是否有错误
3. 确保所有文件都正确加载

---

**祝您使用愉快！** 🎉
