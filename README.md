# Frontend Progress

# HTML, CSS

# JavaScript, Jquery

# React

## React production folder structure by layer

```
src/
├── assets/
│ ├── images/
│ ├── icons/
│ └── fonts/
│
├── components/
│ ├── ui/ # component nguyên tử, tái sử dụng cao
│ │ ├── Button/
│ │ │ ├── Button.tsx
│ │ │ ├── Button.test.tsx
│ │ │ └── index.ts
│ │ ├── Input/
│ │ ├── Modal/
│ │ └── Spinner/
│ └── common/ # component ghép từ nhiều ui, dùng ≥ 2 nơi
│ ├── DataTable/
│ ├── SearchBox/
│ └── ConfirmDialog/
│
├── hooks/ # custom hooks dùng chung, KHÔNG chứa API call
│ ├── useDebounce.ts
│ ├── useClickOutside.ts
│ └── useDisclosure.ts
│
├── layouts/
│ ├── MainLayout/
│ │ ├── MainLayout.tsx
│ │ ├── Header.tsx
│ │ └── Sidebar.tsx
│ ├── AuthLayout/
│ └── index.ts
│
├── pages/ # 1 folder = 1 route
│ ├── Home/
│ │ ├── Home.tsx
│ │ └── index.ts
│ ├── Login/
│ │ ├── Login.tsx
│ │ ├── LoginForm.tsx # component riêng của page này (không đưa vào components/)
│ │ └── index.ts
│ └── UserProfile/
│ ├── UserProfile.tsx
│ └── index.ts
│
├── routes/
│ ├── index.tsx # khai báo router chính (createBrowserRouter)
│ ├── PrivateRoute.tsx # route guard
│ └── routePaths.ts # hằng số path, tránh hard-code string
│
├── services/ # TẦNG DUY NHẤT được gọi Axios
│ ├── api/
│ │ ├── axiosClient.ts # instance + interceptor
│ │ └── endpoints.ts # hằng số URL endpoint
│ ├── user/
│ │ ├── user.dto.ts # GetUserRequestDto, GetUserResponseDto...
│ │ ├── user.mapper.ts # dto -> domain
│ │ └── user.service.ts # hàm gọi API, trả về Domain type
│ └── auth/
│ ├── auth.dto.ts
│ └── auth.service.ts
│
├── features/ # logic nghiệp vụ theo domain (TanStack Query + Zustand)
│ ├── user/
│ │ ├── hooks/
│ │ │ ├── useUserQuery.ts # useQuery wrapper
│ │ │ └── useUpdateUserMutation.ts
│ │ ├── store/
│ │ │ └── userStore.ts # Zustand store riêng (nếu cần state ngoài server-state)
│ │ └── schema/
│ │ └── userForm.schema.ts # Zod/Yup schema cho React Hook Form
│ └── auth/
│ ├── hooks/
│ │ └── useLoginMutation.ts
│ └── store/
│ └── authStore.ts # Zustand: user hiện tại, token, isAuthenticated
│
├── types/ # Domain type dùng toàn app
│ ├── User.ts
│ ├── Auth.ts
│ └── common.ts # ApiError, Pagination, ApiResponse<T>...
│
├── store/ # Zustand store TOÀN CỤC (không thuộc riêng feature nào)
│ ├── themeStore.ts
│ └── uiStore.ts # modal, toast, sidebar state...
│
├── lib/ # cấu hình thư viện third-party
│ ├── queryClient.ts # new QueryClient(...)
│ └── zod.ts # config chung nếu có
│
├── utils/
│ ├── formatDate.ts
│ ├── formatCurrency.ts
│ └── validate.ts
│
├── constants/
│ ├── env.ts
│ └── config.ts
│
├── styles/
│ └── globals.css # @tailwind base/components/utilities + custom CSS variable
│
├── App.tsx # Router + Provider (QueryClientProvider...)
├── main.tsx # ReactDOM.createRoot
└── vite-env.d.ts
```

# TypeScript
