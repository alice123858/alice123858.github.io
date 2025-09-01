// 导航栏功能
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// 点击导航链接时关闭移动端菜单
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// 滚动时导航栏高亮
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// 技能进度条动画
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll('.skill-progress');
      skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// 观察技能部分
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
  observer.observe(skillsSection);
}

// 滚动动画
const fadeElements = document.querySelectorAll('.timeline-item, .project-card, .skill-item, .contact-item');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
      fadeObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => {
  fadeObserver.observe(el);
});

// 联系表单处理
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // 获取表单数据
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const subject = this.querySelector('input[placeholder="主题"]').value;
    const message = this.querySelector('textarea').value;

    // 简单的表单验证
    if (!name || !email || !message) {
      showNotification('请填写所有必填字段', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showNotification('请输入有效的邮箱地址', 'error');
      return;
    }

    // 模拟发送邮件
    showNotification('消息发送中...', 'info');

    setTimeout(() => {
      showNotification('消息发送成功！我会尽快回复您。', 'success');
      this.reset();
    }, 2000);
  });
}

// 邮箱验证函数
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 通知系统
function showNotification(message, type = 'info') {
  // 移除现有的通知
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }

  // 创建通知元素
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

  // 添加样式
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

  // 添加到页面
  document.body.appendChild(notification);

  // 显示动画
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);

  // 关闭按钮事件
  const closeBtn = notification.querySelector('.notification-close');
  closeBtn.addEventListener('click', () => {
    hideNotification(notification);
  });

  // 自动隐藏
  setTimeout(() => {
    hideNotification(notification);
  }, 5000);
}

function hideNotification(notification) {
  notification.style.transform = 'translateX(100%)';
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 300);
}

// 打字机效果
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function () {
  // 为技能进度条添加动画延迟
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
  });

  // 为项目卡片添加动画延迟
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
  });

  // 添加鼠标悬停效果
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-2px)';
    });

    button.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
    });
  });

  // 添加项目卡片悬停效果
  const projectCards2 = document.querySelectorAll('.project-card');
  projectCards2.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // 添加技能条悬停效果
  const skillBars = document.querySelectorAll('.skill-bar');
  skillBars.forEach(bar => {
    bar.addEventListener('mouseenter', function () {
      this.style.transform = 'scaleY(1.2)';
    });

    bar.addEventListener('mouseleave', function () {
      this.style.transform = 'scaleY(1)';
    });
  });
});

// 滚动到顶部按钮
function createScrollToTopButton() {
  const scrollButton = document.createElement('button');
  scrollButton.innerHTML = '↑';
  scrollButton.className = 'scroll-to-top';
  scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    `;

  document.body.appendChild(scrollButton);

  // 滚动事件监听
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollButton.style.opacity = '1';
      scrollButton.style.visibility = 'visible';
    } else {
      scrollButton.style.opacity = '0';
      scrollButton.style.visibility = 'hidden';
    }
  });

  // 点击事件
  scrollButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 悬停效果
  scrollButton.addEventListener('mouseenter', () => {
    scrollButton.style.transform = 'translateY(-3px)';
    scrollButton.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.4)';
  });

  scrollButton.addEventListener('mouseleave', () => {
    scrollButton.style.transform = 'translateY(0)';
    scrollButton.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
  });
}

// 创建滚动到顶部按钮
createScrollToTopButton();

// 添加页面加载动画
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';

  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// 添加键盘导航支持
document.addEventListener('keydown', (e) => {
  // ESC键关闭移动端菜单
  if (e.key === 'Escape') {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }

  // 方向键导航
  if (e.key === 'ArrowUp' && e.ctrlKey) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});

// 添加触摸手势支持（移动端）
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
  touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
  touchEndY = e.changedTouches[0].screenY;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartY - touchEndY;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // 向上滑动
      console.log('向上滑动');
    } else {
      // 向下滑动
      console.log('向下滑动');
    }
  }
}
