interface Props {
  children: React.ReactNode;
  content: React.ReactNode;
  leftNav: React.ReactNode;
  notifications: React.ReactNode;
}

const DashboardLayout = ({ children, content, leftNav, notifications }: Props) => {
  return <div>
    {children}
    {content}
    {leftNav}
    {notifications}
    </div>;
};

export default DashboardLayout;
