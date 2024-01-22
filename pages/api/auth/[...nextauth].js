import axios from "axios"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import * as constants from '../../../utils/constants'

export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        //credentials: {
        //  username: { label: "Username", type: "text", placeholder: "jsmith" },
        //  password: {  label: "Password", type: "password" }
        //},
        async authorize(credentials, req) {
          // Add logic here to look up the user from the credentials supplied

          const { email , password} = JSON.parse(JSON.stringify(credentials))

          let user = (await axios.post(`${constants.BaseURL}/user/login`,{email,password})).data

          if (user.userData) {
            user.userData.name = user.userData.full_name
            user.userData.accessToken = user.accessToken

            // Any object returned will be saved in `user` property of the JWT
            return user.userData
          } else {
           
            // If you return null then an error will be displayed advising the user to check their details.
            return null
    
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        }
      })
  ],
  callbacks:{
    async session({ session, user, token }) {
      //const parse = JSON.parse(JSON.stringify(user))
      //session.user = token.user
      session.user = token.user

      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {

      if(user){
        token.user = user
      }

      return token
    }
  }
}
export default NextAuth(authOptions)