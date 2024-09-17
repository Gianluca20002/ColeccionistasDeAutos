<template>
    <div class="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 class="text-2xl font-bold mb-4" v-if="isLogin">Iniciar sesión</h2>
      <h2 class="text-2xl font-bold mb-4" v-if="!isLogin">Registrar usuario</h2>
  
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2">Correo electrónico</label>
          <input
            v-model="email"
            type="email"
            required
            class="w-full p-2 border rounded-lg"
            placeholder="Tu correo electrónico"
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2">Contraseña</label>
          <input
            v-model="password"
            type="password"
            required
            class="w-full p-2 border rounded-lg"
            placeholder="Tu contraseña"
          />
        </div>
        <div class="mb-4 text-red-500" v-if="errorMessage">{{ errorMessage }}</div>
  
        <button
          type="submit"
          class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          {{ isLogin ? "Iniciar sesión" : "Registrar" }}
        </button>
      </form>
  
      <div class="mt-4">
        <button @click="toggleForm" class="text-blue-500 underline">
          {{ isLogin ? "Crear una cuenta" : "Iniciar sesión" }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { auth } from '../firebase';  // Asegúrate de que esté bien importado
  import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
  
  export default {
    setup() {
      const email = ref('');
      const password = ref('');
      const errorMessage = ref('');
      const isLogin = ref(true);  // Determina si es login o registro
  
      // Función para manejar el envío del formulario
      const handleSubmit = async () => {
        errorMessage.value = '';
        try {
          if (isLogin.value) {
            await signInWithEmailAndPassword(auth, email.value, password.value);
            alert('Inicio de sesión exitoso');
          } else {
            await createUserWithEmailAndPassword(auth, email.value, password.value);
            alert('Usuario registrado exitosamente');
          }
        } catch (error) {
          errorMessage.value = error.message;
        }
      };
  
      // Alternar entre formulario de login y registro
      const toggleForm = () => {
        isLogin.value = !isLogin.value;
        errorMessage.value = '';
        email.value = '';
        password.value = '';
      };
  
      return {
        email,
        password,
        errorMessage,
        isLogin,
        handleSubmit,
        toggleForm
      };
    },
  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos adicionales aquí si lo deseas */
  </style>
  