import {resend} from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
){
    try{
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Anonymous Messaging | Verification Code',
            react: VerificationEmail({username, otp:verifyCode})
        })
        return {
            success: true,
            message: 'Verification email send successfully!'
        }
    }
    catch(error){
        console.error("Error sending verification email!", error)
        return {
            success: false,
            message: 'Failed to send verification email!'
        }
    }
}