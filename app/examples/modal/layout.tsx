export default function Layout(props: {
  children: React.ReactNode,
  authModal: React.ReactNode;
}) {
  return (
    <>
      <div className="flex">
        {props.children}
        {props.authModal}
      </div>
    </>
  )
}
