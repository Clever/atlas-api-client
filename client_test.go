package atlas

import (
	"context"
	"os"
	"testing"

	"github.com/Clever/atlas-api-client/gen-go/client"
	"github.com/Clever/atlas-api-client/gen-go/models"
	"github.com/go-openapi/swag"
)

type IntegrationTestConfig struct {
	AtlasUsername string
	AtlasPassword string
	AtlasURL      string
}

func ConfigFromEnv() IntegrationTestConfig {
	return IntegrationTestConfig{
		AtlasUsername: os.Getenv("ATLAS_USERNAME"),
		AtlasPassword: os.Getenv("ATLAS_PASSWORD"),
		AtlasURL:      os.Getenv("ATLAS_URL"),
	}
}

func GroupFromEnvOrSkip(t *testing.T) string {
	groupID := os.Getenv("GROUP_ID")
	if groupID == "" {
		t.Skipf("skipping integration test due to unset GROUP_ID")
	}
	return groupID
}

func ClusterFromEnvOrSkip(t *testing.T) string {
	clusterName := os.Getenv("CLUSTER_NAME")
	if clusterName == "" {
		t.Skipf("skipping integration test due to unset CLUSTER_NAME")
	}
	return clusterName
}

func (conf IntegrationTestConfig) SkipIfUnset(t *testing.T) {
	if conf.AtlasUsername != "" &&
		conf.AtlasPassword != "" &&
		conf.AtlasURL != "" {
		return
	}
	t.Skipf(`Skipping integration test due to unset integration test config variables.
Set ATLAS_USERNAME, ATLAS_PASSWORD, and ATLAS_URL to run integration tests against an Atlas project.`)
}

func (conf IntegrationTestConfig) Client() *client.WagClient {
	return New(conf.AtlasUsername, conf.AtlasPassword, conf.AtlasURL)
}

func TestEvents(t *testing.T) {
	conf := ConfigFromEnv()
	conf.SkipIfUnset(t)

	groupID := GroupFromEnvOrSkip(t)

	client := conf.Client()

	out, err := client.GetEvents(context.Background(), &models.GetEventsInput{
		GroupID:      groupID,
		PageNum:      swag.Int64(1),
		ItemsPerPage: nil,
		Pretty:       nil,
		EventType:    nil,
		MinDate:      nil,
		MaxDate:      nil,
	})
	if err != nil {
		t.Fatalf("GetEvents: %v", err)
	}
	bs, _ := out.MarshalBinary()
	t.Logf("Compare the following to events to those in your console:\n")
	t.Logf("%+s\n", string(bs))
}

func TestRestartPrimaries(t *testing.T) {
	conf := ConfigFromEnv()
	conf.SkipIfUnset(t)

	groupID := GroupFromEnvOrSkip(t)
	clusterName := ClusterFromEnvOrSkip(t)

	client := conf.Client()

	err := client.RestartPrimaries(context.Background(), &models.RestartPrimariesInput{
		GroupID:     groupID,
		ClusterName: clusterName,
	})
	if err != nil {
		t.Fatalf("RestartPrimaries: %v", err)
	}

	t.Logf("RestartPrimaries is async. Go check the Atlas console and make sure it worked.")
}
