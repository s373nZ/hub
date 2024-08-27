import { CircleCheck, CopyIcon } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { useToast } from "src/components/ui/use-toast";
import { copyToClipboard } from "src/lib/clipboard";

export default function PaymentSuccess() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  if (!state.preimage) {
    navigate("/wallet/send");
    return null;
  }

  const copy = () => {
    copyToClipboard(state.preimage as string, toast);
  };

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center">Payment Successful</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <CircleCheck className="w-32 h-32 mb-2" />
          <Button onClick={copy} variant="outline">
            <CopyIcon className="w-4 h-4 mr-2" />
            Copy Preimage
          </Button>
        </CardContent>
      </Card>
      <Link to="/wallet/send">
        <Button className="mt-4 w-full">Make Another Payment</Button>
      </Link>
      <Link to="/wallet">
        <Button className="mt-4 w-full" variant="secondary">
          Back To Wallet
        </Button>
      </Link>
    </>
  );
}