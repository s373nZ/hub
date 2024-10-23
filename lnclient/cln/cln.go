package cln

import (
	"context"
	"errors"

	"github.com/getAlby/hub/events"
	"github.com/getAlby/hub/lnclient"

	"github.com/lightningnetwork/lnd/lnrpc"
)

type CLNService struct {
	nodeInfo *lnclient.NodeInfo
	cancel   context.CancelFunc
}

func (svc *CLNService) ListTransactions(ctx context.Context, from, until, limit, offset uint64, unpaid bool, invoiceType string) (transactions []lnclient.Transaction, err error) {
	return transactions, nil
}

func (svc *CLNService) GetInfo(ctx context.Context) (info *lnclient.NodeInfo, err error) {
	return svc.nodeInfo, nil
}

func (svc *CLNService) parseChannelPoint(channelPointStr string) (*lnrpc.ChannelPoint, error) {
	return nil, errors.New("invalid channel point")
}

func (svc *CLNService) ListChannels(ctx context.Context) ([]lnclient.Channel, error) {
	channels := make([]lnclient.Channel, 0)
	
	return channels, nil
}

func (svc *CLNService) MakeInvoice(ctx context.Context, amount int64, description string, descriptionHash string, expiry int64) (transaction *lnclient.Transaction, err error) {
	return nil, nil
}

func (svc *CLNService) LookupInvoice(ctx context.Context, paymentHash string) (transaction *lnclient.Transaction, err error) {
	return nil, nil
}

func (svc *CLNService) SendPaymentSync(ctx context.Context, payReq string) (*lnclient.PayInvoiceResponse, error) {
	return nil, nil
}

func (svc *CLNService) SendKeysend(ctx context.Context, amount uint64, destination string, custom_records []lnclient.TLVRecord, preimage string) (*lnclient.PayKeysendResponse, error) {
	return nil, nil
}

func NewCLNService(ctx context.Context, eventPublisher events.EventPublisher, clnAddress, clnCertHex, clnRuneHex string) (result lnclient.LNClient, err error) {
	return nil, nil
}

func (svc *CLNService) GetNodeConnectionInfo(ctx context.Context) (nodeConnectionInfo *lnclient.NodeConnectionInfo, err error) {
	return nil, nil
}

func (svc *CLNService) ConnectPeer(ctx context.Context, connectPeerRequest *lnclient.ConnectPeerRequest) error {
	return nil
}

func (svc *CLNService) OpenChannel(ctx context.Context, openChannelRequest *lnclient.OpenChannelRequest) (*lnclient.OpenChannelResponse, error) {
	return nil, nil
}

func (svc *CLNService) CloseChannel(ctx context.Context, closeChannelRequest *lnclient.CloseChannelRequest) (*lnclient.CloseChannelResponse, error) {
	return nil, nil
}

func (svc *CLNService) GetNewOnchainAddress(ctx context.Context) (string, error) {
	return "todo", nil
}

func (svc *CLNService) GetOnchainBalance(ctx context.Context) (*lnclient.OnchainBalanceResponse, error) {
	return nil, nil
}

func (svc *CLNService) RedeemOnchainFunds(ctx context.Context, toAddress string, amount uint64, sendAll bool) (txId string, err error) {
	return "todo", nil
}

func (svc *CLNService) GetLogOutput(ctx context.Context, maxLen int) ([]byte, error) {
	bytes := make([]byte, 0)
	
	return bytes, nil
}

func (svc *CLNService) ListPeers(ctx context.Context) ([]lnclient.PeerDetails, error) {
	return nil, nil
}

func (svc *CLNService) SignMessage(ctx context.Context, message string) (string, error) {
	return "todo", nil
}

func (svc *CLNService) GetBalances(ctx context.Context) (*lnclient.BalancesResponse, error) {
	return nil, nil
}

func lndPaymentToTransaction(payment *lnrpc.Payment) (*lnclient.Transaction, error) {
	return nil, nil
}

func lndInvoiceToTransaction(invoice *lnrpc.Invoice) *lnclient.Transaction {
	return nil
}

func (svc *CLNService) GetNodeStatus(ctx context.Context) (nodeStatus *lnclient.NodeStatus, err error) {
	return nil, nil
}

func (svc *CLNService) GetNetworkGraph(ctx context.Context, nodeIds []string) (lnclient.NetworkGraphResponse, error) {
	return nil, nil
}

func (svc *CLNService) UpdateChannel(ctx context.Context, updateChannelRequest *lnclient.UpdateChannelRequest) error {
	return nil
}

func (svc *CLNService) DisconnectPeer(ctx context.Context, peerId string) error {
	return nil
}

func (svc *CLNService) GetSupportedNIP47Methods() []string {
	return []string{
		"pay_invoice", "pay_keysend", "get_balance", "get_info", "make_invoice", "lookup_invoice", "list_transactions", "multi_pay_invoice", "multi_pay_keysend", "sign_message",
	}
}

func (svc *CLNService) GetSupportedNIP47NotificationTypes() []string {
	return []string{"payment_received", "payment_sent"}
}

func (svc *CLNService) GetPubkey() string {
	return svc.nodeInfo.Pubkey
}

func (svc *CLNService) SendPaymentProbes(ctx context.Context, invoice string) error {
	return nil
}

func (svc *CLNService) SendSpontaneousPaymentProbes(ctx context.Context, amountMsat uint64, nodeId string) error {
	return nil
}

func (svc *CLNService) ResetRouter(key string) error {
	return nil
}

func (svc *CLNService) GetStorageDir() (string, error) {
	return "", nil
}

func (svc *CLNService) UpdateLastWalletSyncRequest() {}
