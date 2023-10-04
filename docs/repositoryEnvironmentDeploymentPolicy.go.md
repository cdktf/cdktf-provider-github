# `github_repository_environment_deployment_policy`

Refer to the Terraform Registory for docs: [`github_repository_environment_deployment_policy`](https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository_environment_deployment_policy).

# `repositoryEnvironmentDeploymentPolicy` Submodule <a name="`repositoryEnvironmentDeploymentPolicy` Submodule" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryEnvironmentDeploymentPolicy <a name="RepositoryEnvironmentDeploymentPolicy" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository_environment_deployment_policy github_repository_environment_deployment_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v11/repositoryenvironmentdeploymentpolicy"

repositoryenvironmentdeploymentpolicy.NewRepositoryEnvironmentDeploymentPolicy(scope Construct, id *string, config RepositoryEnvironmentDeploymentPolicyConfig) RepositoryEnvironmentDeploymentPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig">RepositoryEnvironmentDeploymentPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig">RepositoryEnvironmentDeploymentPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v11/repositoryenvironmentdeploymentpolicy"

repositoryenvironmentdeploymentpolicy.RepositoryEnvironmentDeploymentPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v11/repositoryenvironmentdeploymentpolicy"

repositoryenvironmentdeploymentpolicy.RepositoryEnvironmentDeploymentPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v11/repositoryenvironmentdeploymentpolicy"

repositoryenvironmentdeploymentpolicy.RepositoryEnvironmentDeploymentPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.branchPatternInput">BranchPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.branchPattern">BranchPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BranchPatternInput`<sup>Optional</sup> <a name="BranchPatternInput" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.branchPatternInput"></a>

```go
func BranchPatternInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `BranchPattern`<sup>Required</sup> <a name="BranchPattern" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.branchPattern"></a>

```go
func BranchPattern() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryEnvironmentDeploymentPolicyConfig <a name="RepositoryEnvironmentDeploymentPolicyConfig" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v11/repositoryenvironmentdeploymentpolicy"

&repositoryenvironmentdeploymentpolicy.RepositoryEnvironmentDeploymentPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BranchPattern: *string,
	Environment: *string,
	Repository: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.branchPattern">BranchPattern</a></code> | <code>*string</code> | The name pattern that branches must match in order to deploy to the environment. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.environment">Environment</a></code> | <code>*string</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.repository">Repository</a></code> | <code>*string</code> | The name of the repository. The name is not case sensitive. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository_environment_deployment_policy#id RepositoryEnvironmentDeploymentPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BranchPattern`<sup>Required</sup> <a name="BranchPattern" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.branchPattern"></a>

```go
BranchPattern *string
```

- *Type:* *string

The name pattern that branches must match in order to deploy to the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository_environment_deployment_policy#branch_pattern RepositoryEnvironmentDeploymentPolicy#branch_pattern}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository_environment_deployment_policy#environment RepositoryEnvironmentDeploymentPolicy#environment}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The name of the repository. The name is not case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository_environment_deployment_policy#repository RepositoryEnvironmentDeploymentPolicy#repository}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/repository_environment_deployment_policy#id RepositoryEnvironmentDeploymentPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



