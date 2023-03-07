# `dataGithubRepositoryWebhooks` Submodule <a name="`dataGithubRepositoryWebhooks` Submodule" id="@cdktf/provider-github.dataGithubRepositoryWebhooks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryWebhooks <a name="DataGithubRepositoryWebhooks" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/d/repository_webhooks github_repository_webhooks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/datagithubrepositorywebhooks"

datagithubrepositorywebhooks.NewDataGithubRepositoryWebhooks(scope Construct, id *string, config DataGithubRepositoryWebhooksConfig) DataGithubRepositoryWebhooks
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig">DataGithubRepositoryWebhooksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig">DataGithubRepositoryWebhooksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/datagithubrepositorywebhooks"

datagithubrepositorywebhooks.DataGithubRepositoryWebhooks_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/datagithubrepositorywebhooks"

datagithubrepositorywebhooks.DataGithubRepositoryWebhooks_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/datagithubrepositorywebhooks"

datagithubrepositorywebhooks.DataGithubRepositoryWebhooks_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.webhooks">Webhooks</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList">DataGithubRepositoryWebhooksWebhooksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Webhooks`<sup>Required</sup> <a name="Webhooks" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.webhooks"></a>

```go
func Webhooks() DataGithubRepositoryWebhooksWebhooksList
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList">DataGithubRepositoryWebhooksWebhooksList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooks.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryWebhooksConfig <a name="DataGithubRepositoryWebhooksConfig" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/datagithubrepositorywebhooks"

&datagithubrepositorywebhooks.DataGithubRepositoryWebhooksConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Repository: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.repository">Repository</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_webhooks#repository DataGithubRepositoryWebhooks#repository}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_webhooks#id DataGithubRepositoryWebhooks#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_webhooks#repository DataGithubRepositoryWebhooks#repository}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_webhooks#id DataGithubRepositoryWebhooks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubRepositoryWebhooksWebhooks <a name="DataGithubRepositoryWebhooksWebhooks" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/datagithubrepositorywebhooks"

&datagithubrepositorywebhooks.DataGithubRepositoryWebhooksWebhooks {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubRepositoryWebhooksWebhooksList <a name="DataGithubRepositoryWebhooksWebhooksList" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/datagithubrepositorywebhooks"

datagithubrepositorywebhooks.NewDataGithubRepositoryWebhooksWebhooksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGithubRepositoryWebhooksWebhooksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.get"></a>

```go
func Get(index *f64) DataGithubRepositoryWebhooksWebhooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGithubRepositoryWebhooksWebhooksOutputReference <a name="DataGithubRepositoryWebhooksWebhooksOutputReference" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/datagithubrepositorywebhooks"

datagithubrepositorywebhooks.NewDataGithubRepositoryWebhooksWebhooksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGithubRepositoryWebhooksWebhooksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.active">Active</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooks">DataGithubRepositoryWebhooksWebhooks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.active"></a>

```go
func Active() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGithubRepositoryWebhooksWebhooks
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryWebhooks.DataGithubRepositoryWebhooksWebhooks">DataGithubRepositoryWebhooksWebhooks</a>

---



