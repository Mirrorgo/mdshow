import { Toggle } from "./ui/toggle";

type ToolbarItemProps = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

function ToolbarItem({ Icon }: ToolbarItemProps) {
  return (
    <Toggle size="sm" className="p-1 h-6">
      <Icon className="h-4 w-4" />
    </Toggle>
  );
}

export default ToolbarItem;
