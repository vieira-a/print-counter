# File structure

Each component has its own folder, witch contains a file for the feature's main component.

```
src/
├── components/
│   ├── Feature1/
│   │   ├── Feature1.tsx (main file)
│   │   ├── Feature1Provider.tsx (context provider)
│   │   └── index.tsx (exports the feature components)
│   ├── Feature2/
│   │   ├── Feature2.tsx
│   │   ├── Feature2Provider.tsx
│   │   └── index.tsx
│   └── App.tsx
├── contexts/
│   ├── Feature1Context.tsx
│   ├── Feature2Context.tsx
│   └── index.tsx
└── index.tsx
```

**How index.tsx works**

```
export { default as Feature1 } from './Feature1';
export { default as Feature1Provider } from './Feature1Provider';
```
