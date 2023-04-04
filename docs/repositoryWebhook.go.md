# `repositoryWebhook` Submodule <a name="`repositoryWebhook` Submodule" id="@cdktf/provider-github.repositoryWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryWebhook <a name="RepositoryWebhook" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/repository_webhook github_repository_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repositorywebhook"

repositorywebhook.NewRepositoryWebhook(scope Construct, id *string, config RepositoryWebhookConfig) RepositoryWebhook
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig">RepositoryWebhookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig">RepositoryWebhookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.putConfiguration"></a>

```go
func PutConfiguration(value RepositoryWebhookConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration">RepositoryWebhookConfiguration</a>

---

##### `ResetActive` <a name="ResetActive" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.resetActive"></a>

```go
func ResetActive()
```

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.resetConfiguration"></a>

```go
func ResetConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repositorywebhook"

repositorywebhook.RepositoryWebhook_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repositorywebhook"

repositorywebhook.RepositoryWebhook_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repositorywebhook"

repositorywebhook.RepositoryWebhook_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference">RepositoryWebhookConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.activeInput">ActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.configurationInput">ConfigurationInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration">RepositoryWebhookConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.eventsInput">EventsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.active">Active</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.events">Events</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.configuration"></a>

```go
func Configuration() RepositoryWebhookConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference">RepositoryWebhookConfigurationOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.activeInput"></a>

```go
func ActiveInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.configurationInput"></a>

```go
func ConfigurationInput() RepositoryWebhookConfiguration
```

- *Type:* <a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration">RepositoryWebhookConfiguration</a>

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.eventsInput"></a>

```go
func EventsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.active"></a>

```go
func Active() interface{}
```

- *Type:* interface{}

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.events"></a>

```go
func Events() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryWebhookConfig <a name="RepositoryWebhookConfig" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repositorywebhook"

&repositorywebhook.RepositoryWebhookConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Events: *[]*string,
	Repository: *string,
	Active: interface{},
	Configuration: github.com/cdktf/cdktf-provider-github-go/github.repositoryWebhook.RepositoryWebhookConfiguration,
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.events">Events</a></code> | <code>*[]*string</code> | A list of events which should trigger the webhook. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.repository">Repository</a></code> | <code>*string</code> | The repository of the webhook. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.active">Active</a></code> | <code>interface{}</code> | Indicate if the webhook should receive events. Defaults to 'true'. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration">RepositoryWebhookConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_webhook#id RepositoryWebhook#id}. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_webhook#name RepositoryWebhook#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.events"></a>

```go
Events *[]*string
```

- *Type:* *[]*string

A list of events which should trigger the webhook.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_webhook#events RepositoryWebhook#events}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The repository of the webhook.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_webhook#repository RepositoryWebhook#repository}

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.active"></a>

```go
Active interface{}
```

- *Type:* interface{}

Indicate if the webhook should receive events. Defaults to 'true'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_webhook#active RepositoryWebhook#active}

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.configuration"></a>

```go
Configuration RepositoryWebhookConfiguration
```

- *Type:* <a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration">RepositoryWebhookConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_webhook#configuration RepositoryWebhook#configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_webhook#id RepositoryWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_webhook#name RepositoryWebhook#name}.

---

### RepositoryWebhookConfiguration <a name="RepositoryWebhookConfiguration" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repositorywebhook"

&repositorywebhook.RepositoryWebhookConfiguration {
	Url: *string,
	ContentType: *string,
	InsecureSsl: interface{},
	Secret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration.property.url">Url</a></code> | <code>*string</code> | The URL of the webhook. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration.property.contentType">ContentType</a></code> | <code>*string</code> | The content type for the payload. Valid values are either 'form' or 'json'. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration.property.insecureSsl">InsecureSsl</a></code> | <code>interface{}</code> | Insecure SSL boolean toggle. Defaults to 'false'. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration.property.secret">Secret</a></code> | <code>*string</code> | The shared secret for the webhook. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL of the webhook.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_webhook#url RepositoryWebhook#url}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

The content type for the payload. Valid values are either 'form' or 'json'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_webhook#content_type RepositoryWebhook#content_type}

---

##### `InsecureSsl`<sup>Optional</sup> <a name="InsecureSsl" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration.property.insecureSsl"></a>

```go
InsecureSsl interface{}
```

- *Type:* interface{}

Insecure SSL boolean toggle. Defaults to 'false'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_webhook#insecure_ssl RepositoryWebhook#insecure_ssl}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

The shared secret for the webhook.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_webhook#secret RepositoryWebhook#secret}

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryWebhookConfigurationOutputReference <a name="RepositoryWebhookConfigurationOutputReference" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repositorywebhook"

repositorywebhook.NewRepositoryWebhookConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositoryWebhookConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.resetInsecureSsl">ResetInsecureSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetInsecureSsl` <a name="ResetInsecureSsl" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.resetInsecureSsl"></a>

```go
func ResetInsecureSsl()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.resetSecret"></a>

```go
func ResetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.insecureSslInput">InsecureSslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.insecureSsl">InsecureSsl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration">RepositoryWebhookConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `InsecureSslInput`<sup>Optional</sup> <a name="InsecureSslInput" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.insecureSslInput"></a>

```go
func InsecureSslInput() interface{}
```

- *Type:* interface{}

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `InsecureSsl`<sup>Required</sup> <a name="InsecureSsl" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.insecureSsl"></a>

```go
func InsecureSsl() interface{}
```

- *Type:* interface{}

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositoryWebhookConfiguration
```

- *Type:* <a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration">RepositoryWebhookConfiguration</a>

---



