# `repositoryPullRequest` Submodule <a name="`repositoryPullRequest` Submodule" id="@cdktf/provider-github.repositoryPullRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryPullRequest <a name="RepositoryPullRequest" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request github_repository_pull_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repositorypullrequest"

repositorypullrequest.NewRepositoryPullRequest(scope Construct, id *string, config RepositoryPullRequestConfig) RepositoryPullRequest
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig">RepositoryPullRequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig">RepositoryPullRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetMaintainerCanModify">ResetMaintainerCanModify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetOwner">ResetOwner</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetBody"></a>

```go
func ResetBody()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetId"></a>

```go
func ResetId()
```

##### `ResetMaintainerCanModify` <a name="ResetMaintainerCanModify" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetMaintainerCanModify"></a>

```go
func ResetMaintainerCanModify()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetOwner"></a>

```go
func ResetOwner()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repositorypullrequest"

repositorypullrequest.RepositoryPullRequest_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repositorypullrequest"

repositorypullrequest.RepositoryPullRequest_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repositorypullrequest"

repositorypullrequest.RepositoryPullRequest_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseSha">BaseSha</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.draft">Draft</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headSha">HeadSha</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.number">Number</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.openedAt">OpenedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.openedBy">OpenedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRefInput">BaseRefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRepositoryInput">BaseRepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.bodyInput">BodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headRefInput">HeadRefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.maintainerCanModifyInput">MaintainerCanModifyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRef">BaseRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRepository">BaseRepository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headRef">HeadRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.maintainerCanModify">MaintainerCanModify</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.title">Title</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BaseSha`<sup>Required</sup> <a name="BaseSha" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseSha"></a>

```go
func BaseSha() *string
```

- *Type:* *string

---

##### `Draft`<sup>Required</sup> <a name="Draft" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.draft"></a>

```go
func Draft() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `HeadSha`<sup>Required</sup> <a name="HeadSha" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headSha"></a>

```go
func HeadSha() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.number"></a>

```go
func Number() *f64
```

- *Type:* *f64

---

##### `OpenedAt`<sup>Required</sup> <a name="OpenedAt" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.openedAt"></a>

```go
func OpenedAt() *f64
```

- *Type:* *f64

---

##### `OpenedBy`<sup>Required</sup> <a name="OpenedBy" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.openedBy"></a>

```go
func OpenedBy() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.updatedAt"></a>

```go
func UpdatedAt() *f64
```

- *Type:* *f64

---

##### `BaseRefInput`<sup>Optional</sup> <a name="BaseRefInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRefInput"></a>

```go
func BaseRefInput() *string
```

- *Type:* *string

---

##### `BaseRepositoryInput`<sup>Optional</sup> <a name="BaseRepositoryInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRepositoryInput"></a>

```go
func BaseRepositoryInput() *string
```

- *Type:* *string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.bodyInput"></a>

```go
func BodyInput() *string
```

- *Type:* *string

---

##### `HeadRefInput`<sup>Optional</sup> <a name="HeadRefInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headRefInput"></a>

```go
func HeadRefInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaintainerCanModifyInput`<sup>Optional</sup> <a name="MaintainerCanModifyInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.maintainerCanModifyInput"></a>

```go
func MaintainerCanModifyInput() interface{}
```

- *Type:* interface{}

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `BaseRef`<sup>Required</sup> <a name="BaseRef" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRef"></a>

```go
func BaseRef() *string
```

- *Type:* *string

---

##### `BaseRepository`<sup>Required</sup> <a name="BaseRepository" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRepository"></a>

```go
func BaseRepository() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `HeadRef`<sup>Required</sup> <a name="HeadRef" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headRef"></a>

```go
func HeadRef() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaintainerCanModify`<sup>Required</sup> <a name="MaintainerCanModify" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.maintainerCanModify"></a>

```go
func MaintainerCanModify() interface{}
```

- *Type:* interface{}

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryPullRequestConfig <a name="RepositoryPullRequestConfig" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/repositorypullrequest"

&repositorypullrequest.RepositoryPullRequestConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BaseRef: *string,
	BaseRepository: *string,
	HeadRef: *string,
	Title: *string,
	Body: *string,
	Id: *string,
	MaintainerCanModify: interface{},
	Owner: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.baseRef">BaseRef</a></code> | <code>*string</code> | Name of the branch serving as the base of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.baseRepository">BaseRepository</a></code> | <code>*string</code> | Name of the base repository to retrieve the Pull Requests from. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.headRef">HeadRef</a></code> | <code>*string</code> | Name of the branch serving as the head of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.title">Title</a></code> | <code>*string</code> | The title of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.body">Body</a></code> | <code>*string</code> | Body of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#id RepositoryPullRequest#id}. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.maintainerCanModify">MaintainerCanModify</a></code> | <code>interface{}</code> | Controls whether the base repository maintainers can modify the Pull Request. Default: 'false'. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.owner">Owner</a></code> | <code>*string</code> | Owner of the repository. If not provided, the provider's default owner is used. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BaseRef`<sup>Required</sup> <a name="BaseRef" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.baseRef"></a>

```go
BaseRef *string
```

- *Type:* *string

Name of the branch serving as the base of the Pull Request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#base_ref RepositoryPullRequest#base_ref}

---

##### `BaseRepository`<sup>Required</sup> <a name="BaseRepository" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.baseRepository"></a>

```go
BaseRepository *string
```

- *Type:* *string

Name of the base repository to retrieve the Pull Requests from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#base_repository RepositoryPullRequest#base_repository}

---

##### `HeadRef`<sup>Required</sup> <a name="HeadRef" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.headRef"></a>

```go
HeadRef *string
```

- *Type:* *string

Name of the branch serving as the head of the Pull Request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#head_ref RepositoryPullRequest#head_ref}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

The title of the Pull Request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#title RepositoryPullRequest#title}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.body"></a>

```go
Body *string
```

- *Type:* *string

Body of the Pull Request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#body RepositoryPullRequest#body}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#id RepositoryPullRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintainerCanModify`<sup>Optional</sup> <a name="MaintainerCanModify" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.maintainerCanModify"></a>

```go
MaintainerCanModify interface{}
```

- *Type:* interface{}

Controls whether the base repository maintainers can modify the Pull Request. Default: 'false'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#maintainer_can_modify RepositoryPullRequest#maintainer_can_modify}

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Owner of the repository. If not provided, the provider's default owner is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#owner RepositoryPullRequest#owner}

---



