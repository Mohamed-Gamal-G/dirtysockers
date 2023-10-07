import Link from "next/link"
const Email = () => {
    return (
        /* Start Drop */
      <section className='Drop flex flex-col justify-center items-center '>
      <h2 className='text-3xl font-bold leading-10 text-center'>Don’t Miss Out The Drop</h2>
      <p className='text-base font-normal leading-10 text-center mb-12'>Submit your email for email reminder</p>
      <div className="input-submit mb-4">
        <input type="text" placeholder='Email' />
        <Link href={"/"}>submit</Link>
      </div>
      <p className='text-center mb-8'>
        By submitting your email above, you confirm to receive our drop date reminder in your email. We will never
        <br/>
        trade, give or sale your email adress to another party. This email collection is solely for Dirty Sockers pre-
        <br/>
        drop email reminder.
        </p>
    </section>
    /* End Drop */
    )
}
export default Email