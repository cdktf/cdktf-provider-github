# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-github.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GithubProvider <a name="GithubProvider" id="@cdktf/provider-github.provider.GithubProvider"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs github}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.provider.GithubProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/provider"

provider.NewGithubProvider(scope Construct, id *string, config GithubProviderConfig) GithubProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig">GithubProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.provider.GithubProviderConfig">GithubProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetAppAuth">ResetAppAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetInsecure">ResetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetParallelRequests">ResetParallelRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetReadDelayMs">ResetReadDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetRetryableErrors">ResetRetryableErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetRetryDelayMs">ResetRetryDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetWriteDelayMs">ResetWriteDelayMs</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.provider.GithubProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.provider.GithubProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.provider.GithubProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.provider.GithubProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.provider.GithubProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.provider.GithubProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.provider.GithubProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.provider.GithubProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.provider.GithubProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.provider.GithubProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-github.provider.GithubProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetAppAuth` <a name="ResetAppAuth" id="@cdktf/provider-github.provider.GithubProvider.resetAppAuth"></a>

```go
func ResetAppAuth()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktf/provider-github.provider.GithubProvider.resetBaseUrl"></a>

```go
func ResetBaseUrl()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktf/provider-github.provider.GithubProvider.resetInsecure"></a>

```go
func ResetInsecure()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-github.provider.GithubProvider.resetMaxRetries"></a>

```go
func ResetMaxRetries()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-github.provider.GithubProvider.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-github.provider.GithubProvider.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetParallelRequests` <a name="ResetParallelRequests" id="@cdktf/provider-github.provider.GithubProvider.resetParallelRequests"></a>

```go
func ResetParallelRequests()
```

##### `ResetReadDelayMs` <a name="ResetReadDelayMs" id="@cdktf/provider-github.provider.GithubProvider.resetReadDelayMs"></a>

```go
func ResetReadDelayMs()
```

##### `ResetRetryableErrors` <a name="ResetRetryableErrors" id="@cdktf/provider-github.provider.GithubProvider.resetRetryableErrors"></a>

```go
func ResetRetryableErrors()
```

##### `ResetRetryDelayMs` <a name="ResetRetryDelayMs" id="@cdktf/provider-github.provider.GithubProvider.resetRetryDelayMs"></a>

```go
func ResetRetryDelayMs()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-github.provider.GithubProvider.resetToken"></a>

```go
func ResetToken()
```

##### `ResetWriteDelayMs` <a name="ResetWriteDelayMs" id="@cdktf/provider-github.provider.GithubProvider.resetWriteDelayMs"></a>

```go
func ResetWriteDelayMs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GithubProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.provider.GithubProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/provider"

provider.GithubProvider_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.provider.GithubProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.provider.GithubProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/provider"

provider.GithubProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.provider.GithubProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-github.provider.GithubProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/provider"

provider.GithubProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.provider.GithubProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.provider.GithubProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/provider"

provider.GithubProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GithubProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.provider.GithubProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.provider.GithubProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GithubProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.provider.GithubProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GithubProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.provider.GithubProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GithubProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.appAuthInput">AppAuthInput</a></code> | <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.baseUrlInput">BaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.insecureInput">InsecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.parallelRequestsInput">ParallelRequestsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.readDelayMsInput">ReadDelayMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.retryableErrorsInput">RetryableErrorsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.retryDelayMsInput">RetryDelayMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.writeDelayMsInput">WriteDelayMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.appAuth">AppAuth</a></code> | <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.insecure">Insecure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.parallelRequests">ParallelRequests</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.readDelayMs">ReadDelayMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.retryableErrors">RetryableErrors</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.retryDelayMs">RetryDelayMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.writeDelayMs">WriteDelayMs</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.provider.GithubProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.provider.GithubProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.provider.GithubProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.provider.GithubProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-github.provider.GithubProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.provider.GithubProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.provider.GithubProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-github.provider.GithubProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-github.provider.GithubProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-github.provider.GithubProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `AppAuthInput`<sup>Optional</sup> <a name="AppAuthInput" id="@cdktf/provider-github.provider.GithubProvider.property.appAuthInput"></a>

```go
func AppAuthInput() GithubProviderAppAuth
```

- *Type:* <a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktf/provider-github.provider.GithubProvider.property.baseUrlInput"></a>

```go
func BaseUrlInput() *string
```

- *Type:* *string

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktf/provider-github.provider.GithubProvider.property.insecureInput"></a>

```go
func InsecureInput() interface{}
```

- *Type:* interface{}

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-github.provider.GithubProvider.property.maxRetriesInput"></a>

```go
func MaxRetriesInput() *f64
```

- *Type:* *f64

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-github.provider.GithubProvider.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-github.provider.GithubProvider.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `ParallelRequestsInput`<sup>Optional</sup> <a name="ParallelRequestsInput" id="@cdktf/provider-github.provider.GithubProvider.property.parallelRequestsInput"></a>

```go
func ParallelRequestsInput() interface{}
```

- *Type:* interface{}

---

##### `ReadDelayMsInput`<sup>Optional</sup> <a name="ReadDelayMsInput" id="@cdktf/provider-github.provider.GithubProvider.property.readDelayMsInput"></a>

```go
func ReadDelayMsInput() *f64
```

- *Type:* *f64

---

##### `RetryableErrorsInput`<sup>Optional</sup> <a name="RetryableErrorsInput" id="@cdktf/provider-github.provider.GithubProvider.property.retryableErrorsInput"></a>

```go
func RetryableErrorsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `RetryDelayMsInput`<sup>Optional</sup> <a name="RetryDelayMsInput" id="@cdktf/provider-github.provider.GithubProvider.property.retryDelayMsInput"></a>

```go
func RetryDelayMsInput() *f64
```

- *Type:* *f64

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-github.provider.GithubProvider.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `WriteDelayMsInput`<sup>Optional</sup> <a name="WriteDelayMsInput" id="@cdktf/provider-github.provider.GithubProvider.property.writeDelayMsInput"></a>

```go
func WriteDelayMsInput() *f64
```

- *Type:* *f64

---

##### `AppAuth`<sup>Optional</sup> <a name="AppAuth" id="@cdktf/provider-github.provider.GithubProvider.property.appAuth"></a>

```go
func AppAuth() GithubProviderAppAuth
```

- *Type:* <a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-github.provider.GithubProvider.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-github.provider.GithubProvider.property.insecure"></a>

```go
func Insecure() interface{}
```

- *Type:* interface{}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-github.provider.GithubProvider.property.maxRetries"></a>

```go
func MaxRetries() *f64
```

- *Type:* *f64

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-github.provider.GithubProvider.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-github.provider.GithubProvider.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `ParallelRequests`<sup>Optional</sup> <a name="ParallelRequests" id="@cdktf/provider-github.provider.GithubProvider.property.parallelRequests"></a>

```go
func ParallelRequests() interface{}
```

- *Type:* interface{}

---

##### `ReadDelayMs`<sup>Optional</sup> <a name="ReadDelayMs" id="@cdktf/provider-github.provider.GithubProvider.property.readDelayMs"></a>

```go
func ReadDelayMs() *f64
```

- *Type:* *f64

---

##### `RetryableErrors`<sup>Optional</sup> <a name="RetryableErrors" id="@cdktf/provider-github.provider.GithubProvider.property.retryableErrors"></a>

```go
func RetryableErrors() *[]*f64
```

- *Type:* *[]*f64

---

##### `RetryDelayMs`<sup>Optional</sup> <a name="RetryDelayMs" id="@cdktf/provider-github.provider.GithubProvider.property.retryDelayMs"></a>

```go
func RetryDelayMs() *f64
```

- *Type:* *f64

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-github.provider.GithubProvider.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `WriteDelayMs`<sup>Optional</sup> <a name="WriteDelayMs" id="@cdktf/provider-github.provider.GithubProvider.property.writeDelayMs"></a>

```go
func WriteDelayMs() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.provider.GithubProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GithubProviderAppAuth <a name="GithubProviderAppAuth" id="@cdktf/provider-github.provider.GithubProviderAppAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.provider.GithubProviderAppAuth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/provider"

&provider.GithubProviderAppAuth {
	Id: *string,
	InstallationId: *string,
	PemFile: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth.property.id">Id</a></code> | <code>*string</code> | The GitHub App ID. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth.property.installationId">InstallationId</a></code> | <code>*string</code> | The GitHub App installation instance ID. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth.property.pemFile">PemFile</a></code> | <code>*string</code> | The GitHub App PEM file contents. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.provider.GithubProviderAppAuth.property.id"></a>

```go
Id *string
```

- *Type:* *string

The GitHub App ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#id GithubProvider#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstallationId`<sup>Required</sup> <a name="InstallationId" id="@cdktf/provider-github.provider.GithubProviderAppAuth.property.installationId"></a>

```go
InstallationId *string
```

- *Type:* *string

The GitHub App installation instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#installation_id GithubProvider#installation_id}

---

##### `PemFile`<sup>Required</sup> <a name="PemFile" id="@cdktf/provider-github.provider.GithubProviderAppAuth.property.pemFile"></a>

```go
PemFile *string
```

- *Type:* *string

The GitHub App PEM file contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#pem_file GithubProvider#pem_file}

---

### GithubProviderConfig <a name="GithubProviderConfig" id="@cdktf/provider-github.provider.GithubProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.provider.GithubProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/provider"

&provider.GithubProviderConfig {
	Alias: *string,
	AppAuth: github.com/cdktf/cdktf-provider-github-go/github/v15.provider.GithubProviderAppAuth,
	BaseUrl: *string,
	Insecure: interface{},
	MaxRetries: *f64,
	Organization: *string,
	Owner: *string,
	ParallelRequests: interface{},
	ReadDelayMs: *f64,
	RetryableErrors: *[]*f64,
	RetryDelayMs: *f64,
	Token: *string,
	WriteDelayMs: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.appAuth">AppAuth</a></code> | <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | app_auth block. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | The GitHub Base API URL. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.insecure">Insecure</a></code> | <code>interface{}</code> | Enable `insecure` mode for testing purposes. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | Number of times to retry a request after receiving an error status codeDefaults to 3. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.organization">Organization</a></code> | <code>*string</code> | The GitHub organization name to manage. Use this field instead of `owner` when managing organization accounts. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.owner">Owner</a></code> | <code>*string</code> | The GitHub owner name to manage. Use this field instead of `organization` when managing individual accounts. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.parallelRequests">ParallelRequests</a></code> | <code>interface{}</code> | Allow the provider to make parallel API calls to GitHub. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.readDelayMs">ReadDelayMs</a></code> | <code>*f64</code> | Amount of time in milliseconds to sleep in between non-write requests to GitHub API. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.retryableErrors">RetryableErrors</a></code> | <code>*[]*f64</code> | Allow the provider to retry after receiving an error status code, the max_retries should be set for this to workDefaults to [500, 502, 503, 504]. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.retryDelayMs">RetryDelayMs</a></code> | <code>*f64</code> | Amount of time in milliseconds to sleep in between requests to GitHub API after an error response. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.token">Token</a></code> | <code>*string</code> | The OAuth token used to connect to GitHub. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.writeDelayMs">WriteDelayMs</a></code> | <code>*f64</code> | Amount of time in milliseconds to sleep in between writes to GitHub API. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-github.provider.GithubProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#alias GithubProvider#alias}

---

##### `AppAuth`<sup>Optional</sup> <a name="AppAuth" id="@cdktf/provider-github.provider.GithubProviderConfig.property.appAuth"></a>

```go
AppAuth GithubProviderAppAuth
```

- *Type:* <a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

app_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#app_auth GithubProvider#app_auth}

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-github.provider.GithubProviderConfig.property.baseUrl"></a>

```go
BaseUrl *string
```

- *Type:* *string

The GitHub Base API URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#base_url GithubProvider#base_url}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-github.provider.GithubProviderConfig.property.insecure"></a>

```go
Insecure interface{}
```

- *Type:* interface{}

Enable `insecure` mode for testing purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#insecure GithubProvider#insecure}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-github.provider.GithubProviderConfig.property.maxRetries"></a>

```go
MaxRetries *f64
```

- *Type:* *f64

Number of times to retry a request after receiving an error status codeDefaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#max_retries GithubProvider#max_retries}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-github.provider.GithubProviderConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The GitHub organization name to manage. Use this field instead of `owner` when managing organization accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#organization GithubProvider#organization}

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-github.provider.GithubProviderConfig.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

The GitHub owner name to manage. Use this field instead of `organization` when managing individual accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#owner GithubProvider#owner}

---

##### `ParallelRequests`<sup>Optional</sup> <a name="ParallelRequests" id="@cdktf/provider-github.provider.GithubProviderConfig.property.parallelRequests"></a>

```go
ParallelRequests interface{}
```

- *Type:* interface{}

Allow the provider to make parallel API calls to GitHub.

You may want to set it to true when you have a private Github Enterprise without strict rate limits. Although, it is not possible to enable this setting on github.com because we enforce the respect of github.com's best practices to avoid hitting abuse rate limitsDefaults to false if not set

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#parallel_requests GithubProvider#parallel_requests}

---

##### `ReadDelayMs`<sup>Optional</sup> <a name="ReadDelayMs" id="@cdktf/provider-github.provider.GithubProviderConfig.property.readDelayMs"></a>

```go
ReadDelayMs *f64
```

- *Type:* *f64

Amount of time in milliseconds to sleep in between non-write requests to GitHub API.

Defaults to 0ms if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#read_delay_ms GithubProvider#read_delay_ms}

---

##### `RetryableErrors`<sup>Optional</sup> <a name="RetryableErrors" id="@cdktf/provider-github.provider.GithubProviderConfig.property.retryableErrors"></a>

```go
RetryableErrors *[]*f64
```

- *Type:* *[]*f64

Allow the provider to retry after receiving an error status code, the max_retries should be set for this to workDefaults to [500, 502, 503, 504].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#retryable_errors GithubProvider#retryable_errors}

---

##### `RetryDelayMs`<sup>Optional</sup> <a name="RetryDelayMs" id="@cdktf/provider-github.provider.GithubProviderConfig.property.retryDelayMs"></a>

```go
RetryDelayMs *f64
```

- *Type:* *f64

Amount of time in milliseconds to sleep in between requests to GitHub API after an error response.

Defaults to 1000ms or 1s if not set, the max_retries must be set to greater than zero.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#retry_delay_ms GithubProvider#retry_delay_ms}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-github.provider.GithubProviderConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

The OAuth token used to connect to GitHub.

Anonymous mode is enabled if both `token` and `app_auth` are not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#token GithubProvider#token}

---

##### `WriteDelayMs`<sup>Optional</sup> <a name="WriteDelayMs" id="@cdktf/provider-github.provider.GithubProviderConfig.property.writeDelayMs"></a>

```go
WriteDelayMs *f64
```

- *Type:* *f64

Amount of time in milliseconds to sleep in between writes to GitHub API.

Defaults to 1000ms or 1s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs#write_delay_ms GithubProvider#write_delay_ms}

---



