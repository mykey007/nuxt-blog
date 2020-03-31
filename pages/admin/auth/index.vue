<template>
    <div class="admin-auth-page">
        <div class="auth-container">
            <form>
                <AppControlInput type="email">E-Main Address</AppControlInput>
                <AppControlInput type="pasword">Password</AppControlInput>
                <AppButton type="submit" >{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
                <AppButton @click="$router.push('/admin/new-post')">
                    Switch to {{ isLogin ? 'Login' : 'Sign Up' }}
                </AppButton>
            </form>
        </div>
    </div>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'

export default {
  name: 'AdminAuthPage',
  layout: 'admin', 
  components: {
    AppControlInput,
    AppButton
  },
  data() {
    return {
      isLogin: true
    }
  }
}
</script>