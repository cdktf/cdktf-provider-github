# `data_github_repository_deployment_branch_policies`

Refer to the Terraform Registory for docs: [`data_github_repository_deployment_branch_policies`](https://registry.terraform.io/providers/integrations/github/5.30.1/docs/data-sources/repository_deployment_branch_policies).

# `dataGithubRepositoryDeploymentBranchPolicies` Submodule <a name="`dataGithubRepositoryDeploymentBranchPolicies` Submodule" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryDeploymentBranchPolicies <a name="DataGithubRepositoryDeploymentBranchPolicies" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/data-sources/repository_deployment_branch_policies github_repository_deployment_branch_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v10/datagithubrepositorydeploymentbranchpolicies"

datagithubrepositorydeploymentbranchpolicies.NewDataGithubRepositoryDeploymentBranchPolicies(scope Construct, id *string, config DataGithubRepositoryDeploymentBranchPoliciesConfig) DataGithubRepositoryDeploymentBranchPolicies
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig">DataGithubRepositoryDeploymentBranchPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig">DataGithubRepositoryDeploymentBranchPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v10/datagithubrepositorydeploymentbranchpolicies"

datagithubrepositorydeploymentbranchpolicies.DataGithubRepositoryDeploymentBranchPolicies_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v10/datagithubrepositorydeploymentbranchpolicies"

datagithubrepositorydeploymentbranchpolicies.DataGithubRepositoryDeploymentBranchPolicies_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v10/datagithubrepositorydeploymentbranchpolicies"

datagithubrepositorydeploymentbranchpolicies.DataGithubRepositoryDeploymentBranchPolicies_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.deploymentBranchPolicies">DeploymentBranchPolicies</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList">DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.environmentNameInput">EnvironmentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.environmentName">EnvironmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DeploymentBranchPolicies`<sup>Required</sup> <a name="DeploymentBranchPolicies" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.deploymentBranchPolicies"></a>

```go
func DeploymentBranchPolicies() DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList">DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList</a>

---

##### `EnvironmentNameInput`<sup>Optional</sup> <a name="EnvironmentNameInput" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.environmentNameInput"></a>

```go
func EnvironmentNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `EnvironmentName`<sup>Required</sup> <a name="EnvironmentName" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.environmentName"></a>

```go
func EnvironmentName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryDeploymentBranchPoliciesConfig <a name="DataGithubRepositoryDeploymentBranchPoliciesConfig" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v10/datagithubrepositorydeploymentbranchpolicies"

&datagithubrepositorydeploymentbranchpolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnvironmentName: *string,
	Repository: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.environmentName">EnvironmentName</a></code> | <code>*string</code> | The target environment name. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.repository">Repository</a></code> | <code>*string</code> | The GitHub repository name. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/data-sources/repository_deployment_branch_policies#id DataGithubRepositoryDeploymentBranchPolicies#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnvironmentName`<sup>Required</sup> <a name="EnvironmentName" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.environmentName"></a>

```go
EnvironmentName *string
```

- *Type:* *string

The target environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/data-sources/repository_deployment_branch_policies#environment_name DataGithubRepositoryDeploymentBranchPolicies#environment_name}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The GitHub repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/data-sources/repository_deployment_branch_policies#repository DataGithubRepositoryDeploymentBranchPolicies#repository}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/data-sources/repository_deployment_branch_policies#id DataGithubRepositoryDeploymentBranchPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies <a name="DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v10/datagithubrepositorydeploymentbranchpolicies"

&datagithubrepositorydeploymentbranchpolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList <a name="DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v10/datagithubrepositorydeploymentbranchpolicies"

datagithubrepositorydeploymentbranchpolicies.NewDataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.get"></a>

```go
func Get(index *f64) DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference <a name="DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v10/datagithubrepositorydeploymentbranchpolicies"

datagithubrepositorydeploymentbranchpolicies.NewDataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies">DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies">DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies</a>

---



