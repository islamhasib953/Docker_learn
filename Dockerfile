# FROM node:14
# ده البيز بتاعى اللى بتحتجه علشان ابنى منه يعنى مثلا فى اى بروجكت nodejs بتاج اول حاجة انزل node js على الجهاز عندى

# WORKDIR /app

# COPY package.json .
# تانى حاجات بحتاج اسطب express package عندى ودى موجودة جوة package.json علان كده هعمل ليها نسخ جوة app الفلولدر اللى حددته يكون جواه الشغل كله الكود بتاع المشروع كامل

# # # ARG NODE_ENV
# # # RUN if [ "$NODE_ENV" = "production" ]; \
# # #     then npm install --only=production; \
# # #     else npm install; \
# # #     fi
# if i need change in dockerfile based on environment


# RUN npm install
# تالت حاجة فى مشروع node js بحتاج انزل npm عادى

# COPY . .
# هنا بقى محتاج انقل كل اكواد المشروع جوى الفلولدر اللى حدتته

# # ENV port=4000     #الاتنين دول علشان ال enviroment variable
# # EXPOSE ${port}
# # هنا بحدد ان البورت اللى هكلم عليه البرنامج اللى جوة الكونينر هو كذا

# EXPOSE 4000

# CMD [ "npm", "run", "start-dev" ]
#  3   علشان لما اجى ارن الapp   اكتب الكوماند ده  npm start

FROM node:14 as base

FROM base as development
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "npm", "run", "start-dev" ]

FROM base as production
COPY package.json .
RUN npm install --only=production
COPY . .
EXPOSE 4000
CMD [ "npm", "start" ]