import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "src/components/Container";
import TwoColumnLayoutHeader from "src/components/TwoColumnLayoutHeader";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import { useToast } from "src/components/ui/use-toast";
import useSetupStore from "src/state/SetupStore";

export function CLNForm() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const setupStore = useSetupStore();
  const [clnAddress, setClnAddress] = React.useState<string>(
    setupStore.nodeInfo.clnAddress || ""
  );
  const [clnCertHex, setClnCertHex] = React.useState<string>(
    setupStore.nodeInfo.clnCertHex || ""
  );
  const [clnRuneHex, setClnRuneHex] = React.useState<string>(
    setupStore.nodeInfo.clnRuneHex || ""
  );

  // TODO: proper onboarding
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!clnAddress || !clnCertHex || !clnRuneHex) {
      toast({
        title: "Please fill out all fields",
        variant: "destructive",
      });
      return;
    }
    handleSubmit({
      clnAddress,
      clnCertHex,
      clnRuneHex,
    });
  }

  async function handleSubmit(data: object) {
    setupStore.updateNodeInfo({
      backendType: "CLN",
      ...data,
    });
    navigate("/setup/finish");
  }

  return (
    <Container>
      <TwoColumnLayoutHeader
        title="Configure CLN"
        description="Fill out wallet details to finish setup."
      />
      <form className="w-full grid gap-5 mt-6" onSubmit={onSubmit}>
        <div className="grid gap-1.5">
          <Label htmlFor="cln-address">CLN Address (GRPC)</Label>
          <Input
            name="cln-address"
            onChange={(e) => setClnAddress(e.target.value)}
            value={clnAddress}
            id="cln-address"
          />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="cln-cert-hex">TLS Certificate (Hex)</Label>
          <Input
            name="cln-cert-hex"
            onChange={(e) => setClnCertHex(e.target.value)}
            value={clnCertHex}
            type="text"
            id="cln-cert-hex"
          />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="cln-macaroon-hex">Admin Rune (Hex)</Label>
          <Input
            name="cln-macaroon-hex"
            onChange={(e) => setClnRuneHex(e.target.value)}
            value={clnRuneHex}
            type="text"
            id="cln-macaroon-hex"
          />
        </div>
        <Button>Next</Button>
      </form>
    </Container>
  );
}
