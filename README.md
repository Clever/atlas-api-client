# atlas-api-client [![GoDoc](https://godoc.org/github.com/Clever/atlas-api-client/gen-go/client?status.png)](https://godoc.org/github.com/Clever/atlas-api-client/gen-go/client)

With MongoDB's release of [go-client-mongodb-atlas](https://github.com/mongodb/go-client-mongodb-atlas), new repos should opt to use the official client instead. This repo is used for those that have not migrated over.

Go and JavaScript clients for MongoDB Atlas.

Owned by eng-infra.

## Usage

``` go
package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"

	"github.com/Clever/atlas-api-client/gen-go/client"
)

func main() {
	username := "foo@foo.com"
	password := "password"
	url := "https://cloud.mongodb.com"
	atlasAPI := client.New(atlasUsername, password, url)
	ctx := context.Background()
	clusters, err := atlasAPI.GetClusters(ctx, "groupID")
	// ...
}
```


- Run `make generate` to generate the code.
## Developing

- Update swagger.yml with your endpoints. See the [Swagger spec](http://swagger.io/specification/) for additional details on defining your swagger file.

- Run `make generate` to generate the code.
test
