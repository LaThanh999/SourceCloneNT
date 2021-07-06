# project-clone

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Deploy Netlify
## Step 1: Add Your New Site
```
Creating a new site on Netlify is simple. Once you’ve logged in, you’ll be taken to https://app.netlify.com. If you’re just starting out, there’s only one option, Click the Add A New Project button shown above.
```

## Step 2: Link to Your GitHub (or supported version-control tool of choice)
```
Clicking “Add A New Project”
Be sure to push your repo to GitHub, so that all we’ll need to do is link Netlify to GitHub. Click the GitHub button as illustrated in the screenshot above.
```

## Step 3: Authorize Netlify
```
It’s time to allow Netlify and GitHub to talk to each other. Clicking the Authorize Application button will do just that. Like it says in the image below, Netlify doesn’t store your GitHub access token on our servers. If you’d like to know more about the permissions Netlify requests and why we need them, you can visit our documentation on Git provider permissions.
```

## Step 4: Select Your Repo
```
Now that you’ve connected Netlify and GitHub, you can see a list of your Git repos. Choose the repo you’d like to deploy from the list.
```

## Step 5: Configure Your Settings
```
Here you can configure your options. Make sure your publish directory is where your public site files are placed after building the site (e.g. dist) and your build command is whatever you run to build the site (e.g. npm run build). Then click the Deploy site button to continue.
```

## Step 6: Build Your Site
```
Now it’s time to sit back and relax. You did your part; let Netlify take care of the rest. It’ll only take a minute.
```

## Step 7: All Done
```
Once the build completes, your site is live! Head to the overview and you can see the URL of your newly published site.
Netlify automatically generated a name for your site. Let’s update that by visiting the settings tab and clicking “Change site name”:
There, that’s better. Looks pretty good, huh? Wasn’t that easy? To take it a step further, set up your custom domain.
Congratulations on your new site, and thanks for using Netlify!
```

### Customize configuration
See [Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/).


# Structure code
    .
    ├── public                                      # Chứa những file có thể truy cập từ bên ngoài như css, hình ảnh
    │   
    ├── src                                         # Source files (alternatively `lib` or `app`)
    |   ├── assets                                  # Chứa các file hỗ trợ thêm cho project như 
    |   |   └── images                              # Chứa các file hình ảnh
    |   ├── components                              # Chứa thông tin các component dùng theo từng trang, đúng ra nên phân như sau:
    |   |   └── component                           # Chứa các component con
    |   |   |   ├──{name}.Vue                       # Các file componet  .vue  
    |   |   |   └──index.js                         # export các file component
    |   |   └── index.js                            # add các componet vào global
    |   ├── constants                               # Chứa các file config dùng chung
    |   |   ├── pageName                            # Chứa name hiển thị dùng trong router
    |   |   |   └── index.js                        # Khai báo name dùng trong router
    |   |   ├── routers                             # Chứa các path dùng trong router
    |   |   |   └── index.js                        # Khai báo các path dùng trong router
    |   |   └── index.js                            # Export các file trong constants 
    |   ├── plugins                                 # Plugin cho từng trang
    |   |   └── vuetify.js                          # Chứa file config vuetify
    |   ├── router                                  # Bộ định tuyến của vue
    |   |   └── index.js                            # Khai báo config các đường dẫn
    |   ├── store                                   # Chứa những thứ liên quan vuex như store, module
    |   ├── style                                   # Chứa các file liên quan tracking google analytics (ga) hay google tag manager (gtm)
    |   |   └── index.css                           # Chứa các file SCSS, CSS dùng chung
    |   ├── utlis                                   # Chứa các file plugin sử dụng
    |   |   ├── axios.js                            # Dùng đẻ xử lý với api
    |   |   ├── color.js                            # Config lại màu mặc định
    |   |   └── lodash.js                           # Dùng để xử lý với Array
    |   ├── views                                   # Chứa các file giao diện
    |   ├── App.vue                                 # File Vue chính
    |   └── main.js                                 # Main main chính, import các plugin config ở đay
    ├── .env.local                                  # Chứa cấu hình cho môi trường local
    ├── .env.production                             # Chứa cấu hình cho môi trường production
    ├── .env.staging                                # Chứa cấu hình cho môi trường staging
    ├── jsconfig.json                               # Cấu hình cho đường dẫn chung với @/* tương đương ./src/*
                                                        Lợi ích: thay vì đứng ở trong file ./src/common/components/box-order/BoxOrder.vue và sử dụng import { receiptMethodType, } from '../../common/types'; => sử dụng import { receiptMethodType, } from '@/common/types';
    ├── package.json                                # Chứa các thư viện cần thiết để chạy ứng dụng + chứa các đoạn script để chạy ứng dụng:
                                                        ## Cú pháp: npm run <tên-script>
                                                            ## Ví dụ:
                                                                npm run serve           => chạy ứng dụng, tuy nhiên trong trường hợp này ứng dụng chúng ta chạy bằng cách sinh ra các file tĩnh trước như html, css, js nên câu lệnh này không hoạt động trong trường hợp này
                                                                npm run build           => Sinh ra cái file js ở tất cả các môi trường development, local, production => dùng ở nhánh master (tổng hợp tất cả các)
                                                                npm run build-pro       => Sinh ra các file js ở môi trường production
                                                                npm run build-local     => Sinh ra các file js ở môi trường local và development => dùng ở nhánh beta (nhánh này để xem trước tất cả các kịch bản, tính năng mới sắp sửa release, đang test) + dùng ở nhánh dev (nhánh này sẽ gom tất cả các tính năng sắp sửa release đã qua giai đoạn test)
    └── vue.config.js                               # Cấu hình để build ra các file js, css, hình ảnh dùng lệnh npm run build-xx cho các môi trường + bao gồm cả bundle và minify






