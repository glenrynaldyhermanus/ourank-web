# Supabase Authentication Setup Guide

## 1. Environment Variables

Create a `.env.local` file in the root directory with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 2. Supabase Project Setup

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Get your project URL and anon key from the project settings
3. Update the `.env.local` file with your credentials

## 3. Authentication Features

### Implemented Features:
- ✅ Email/Password authentication
- ✅ Sign in page with form validation
- ✅ Protected routes with automatic redirect
- ✅ Toast notifications for user feedback
- ✅ Loading states and error handling
- ✅ Session persistence
- ✅ Sign out functionality
- ✅ User context with real-time updates

### Available Pages:
- `/sign-in` - Login page
- `/dashboard` - Protected dashboard (example)
- Any other page can be protected using `<ProtectedRoute>`

### Usage Examples:

#### Using Auth in Components:
```typescript
import { useAuthContext } from "@/components/providers/AuthProvider";

function MyComponent() {
  const { user, loading, signOut } = useAuthContext();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  );
}
```

#### Protecting Routes:
```typescript
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function MyPage() {
  return (
    <ProtectedRoute>
      <div>This content is only visible to authenticated users</div>
    </ProtectedRoute>
  );
}
```

#### Using Toast Notifications:
```typescript
import { useToast } from "@/components/providers/ToastProvider";

function MyComponent() {
  const { showToast } = useToast();

  const handleSuccess = () => {
    showToast({
      type: "success",
      title: "Success!",
      message: "Operation completed successfully"
    });
  };

  const handleError = () => {
    showToast({
      type: "error",
      title: "Error",
      message: "Something went wrong"
    });
  };
}
```

## 4. File Structure

```
src/
├── lib/
│   ├── supabase.ts      # Supabase client
│   ├── auth.ts          # Authentication utilities
│   └── utils.ts         # Utility functions
├── components/
│   ├── providers/
│   │   ├── AuthProvider.tsx    # Authentication context
│   │   └── ToastProvider.tsx   # Toast notifications
│   ├── ProtectedRoute.tsx      # Route protection
│   └── ui/
│       └── Button.tsx          # UI components
└── app/
    ├── layout.tsx              # Root layout with providers
    ├── sign-in/
    │   └── page.tsx           # Sign in page
    └── dashboard/
        └── page.tsx           # Protected dashboard example
```

## 5. Testing Checklist

- [ ] Environment variables configured correctly
- [ ] Supabase project created and configured
- [ ] AuthProvider wraps the app in layout.tsx
- [ ] ToastProvider wraps the app in layout.tsx
- [ ] Sign-in page works at `/sign-in`
- [ ] Auth state persists across page refreshes
- [ ] Sign-out functionality works
- [ ] Protected routes redirect to sign-in
- [ ] Error handling works properly
- [ ] Toast notifications work

## 6. Next Steps

### Additional Features to Consider:
- Email verification flow
- Password reset functionality
- Social auth providers (Google, GitHub, etc.)
- Role-based access control
- Session management
- Remember me functionality
- Sign up page
- Forgot password page

### Creating Additional Auth Pages:

#### Sign Up Page (`/sign-up`):
```typescript
// src/app/sign-up/page.tsx
"use client";

import { useState } from "react";
import { AuthUtil } from "@/lib/auth";
import { useToast } from "@/components/providers/ToastProvider";
import { PrimaryButton } from "@/components/ui";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await AuthUtil.signUpWithEmail(email, password, fullName);
      showToast({
        type: "success",
        title: "Account created!",
        message: "Please check your email to verify your account"
      });
    } catch (error) {
      showToast({
        type: "error",
        title: "Sign up failed",
        message: error instanceof Error ? error.message : "Unknown error"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Create Account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>

          <PrimaryButton
            type="submit"
            disabled={loading}
            loading={loading}
            className="w-full"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
}
```

## 7. Troubleshooting

### Common Issues:

1. **Environment variables not loading**: Make sure `.env.local` is in the root directory and restart the development server
2. **Authentication not working**: Check that your Supabase URL and anon key are correct
3. **Redirect loops**: Ensure your public paths are correctly configured in AuthProvider
4. **Hydration errors**: The mounted state in components should prevent this

### Debug Tips:
- Check browser console for errors
- Verify Supabase project settings
- Test with a simple user account first
- Use browser dev tools to check localStorage for auth tokens 