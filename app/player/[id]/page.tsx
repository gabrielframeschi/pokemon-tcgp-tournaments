interface IProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Player(props: IProps) {
  const { id } = await props.params;

  return <div>{id}</div>;
}
