# `actionsRunnerGroup` Submodule <a name="`actionsRunnerGroup` Submodule" id="@cdktf/provider-github.actionsRunnerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsRunnerGroup <a name="ActionsRunnerGroup" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/actions_runner_group github_actions_runner_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionsrunnergroup"

actionsrunnergroup.NewActionsRunnerGroup(scope Construct, id *string, config ActionsRunnerGroupConfig) ActionsRunnerGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig">ActionsRunnerGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig">ActionsRunnerGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetAllowsPublicRepositories">ResetAllowsPublicRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetRestrictedToWorkflows">ResetRestrictedToWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetSelectedRepositoryIds">ResetSelectedRepositoryIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetSelectedWorkflows">ResetSelectedWorkflows</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowsPublicRepositories` <a name="ResetAllowsPublicRepositories" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetAllowsPublicRepositories"></a>

```go
func ResetAllowsPublicRepositories()
```

##### `ResetRestrictedToWorkflows` <a name="ResetRestrictedToWorkflows" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetRestrictedToWorkflows"></a>

```go
func ResetRestrictedToWorkflows()
```

##### `ResetSelectedRepositoryIds` <a name="ResetSelectedRepositoryIds" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetSelectedRepositoryIds"></a>

```go
func ResetSelectedRepositoryIds()
```

##### `ResetSelectedWorkflows` <a name="ResetSelectedWorkflows" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetSelectedWorkflows"></a>

```go
func ResetSelectedWorkflows()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ActionsRunnerGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionsrunnergroup"

actionsrunnergroup.ActionsRunnerGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionsrunnergroup"

actionsrunnergroup.ActionsRunnerGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionsrunnergroup"

actionsrunnergroup.ActionsRunnerGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionsrunnergroup"

actionsrunnergroup.ActionsRunnerGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ActionsRunnerGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ActionsRunnerGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ActionsRunnerGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/actions_runner_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ActionsRunnerGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.default">Default</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.inherited">Inherited</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.runnersUrl">RunnersUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoriesUrl">SelectedRepositoriesUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.allowsPublicRepositoriesInput">AllowsPublicRepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.restrictedToWorkflowsInput">RestrictedToWorkflowsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoryIdsInput">SelectedRepositoryIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedWorkflowsInput">SelectedWorkflowsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.visibilityInput">VisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.allowsPublicRepositories">AllowsPublicRepositories</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.restrictedToWorkflows">RestrictedToWorkflows</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedWorkflows">SelectedWorkflows</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Inherited`<sup>Required</sup> <a name="Inherited" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.inherited"></a>

```go
func Inherited() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RunnersUrl`<sup>Required</sup> <a name="RunnersUrl" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.runnersUrl"></a>

```go
func RunnersUrl() *string
```

- *Type:* *string

---

##### `SelectedRepositoriesUrl`<sup>Required</sup> <a name="SelectedRepositoriesUrl" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoriesUrl"></a>

```go
func SelectedRepositoriesUrl() *string
```

- *Type:* *string

---

##### `AllowsPublicRepositoriesInput`<sup>Optional</sup> <a name="AllowsPublicRepositoriesInput" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.allowsPublicRepositoriesInput"></a>

```go
func AllowsPublicRepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RestrictedToWorkflowsInput`<sup>Optional</sup> <a name="RestrictedToWorkflowsInput" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.restrictedToWorkflowsInput"></a>

```go
func RestrictedToWorkflowsInput() interface{}
```

- *Type:* interface{}

---

##### `SelectedRepositoryIdsInput`<sup>Optional</sup> <a name="SelectedRepositoryIdsInput" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoryIdsInput"></a>

```go
func SelectedRepositoryIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `SelectedWorkflowsInput`<sup>Optional</sup> <a name="SelectedWorkflowsInput" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedWorkflowsInput"></a>

```go
func SelectedWorkflowsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.visibilityInput"></a>

```go
func VisibilityInput() *string
```

- *Type:* *string

---

##### `AllowsPublicRepositories`<sup>Required</sup> <a name="AllowsPublicRepositories" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.allowsPublicRepositories"></a>

```go
func AllowsPublicRepositories() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RestrictedToWorkflows`<sup>Required</sup> <a name="RestrictedToWorkflows" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.restrictedToWorkflows"></a>

```go
func RestrictedToWorkflows() interface{}
```

- *Type:* interface{}

---

##### `SelectedRepositoryIds`<sup>Required</sup> <a name="SelectedRepositoryIds" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoryIds"></a>

```go
func SelectedRepositoryIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `SelectedWorkflows`<sup>Required</sup> <a name="SelectedWorkflows" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedWorkflows"></a>

```go
func SelectedWorkflows() *[]*string
```

- *Type:* *[]*string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsRunnerGroupConfig <a name="ActionsRunnerGroupConfig" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionsrunnergroup"

&actionsrunnergroup.ActionsRunnerGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Visibility: *string,
	AllowsPublicRepositories: interface{},
	RestrictedToWorkflows: interface{},
	SelectedRepositoryIds: *[]*f64,
	SelectedWorkflows: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.name">Name</a></code> | <code>*string</code> | Name of the runner group. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.visibility">Visibility</a></code> | <code>*string</code> | The visibility of the runner group. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.allowsPublicRepositories">AllowsPublicRepositories</a></code> | <code>interface{}</code> | Whether public repositories can be added to the runner group. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.restrictedToWorkflows">RestrictedToWorkflows</a></code> | <code>interface{}</code> | If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>*[]*f64</code> | List of repository IDs that can access the runner group. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.selectedWorkflows">SelectedWorkflows</a></code> | <code>*[]*string</code> | List of workflows the runner group should be allowed to run. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/actions_runner_group#name ActionsRunnerGroup#name}

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.visibility"></a>

```go
Visibility *string
```

- *Type:* *string

The visibility of the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/actions_runner_group#visibility ActionsRunnerGroup#visibility}

---

##### `AllowsPublicRepositories`<sup>Optional</sup> <a name="AllowsPublicRepositories" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.allowsPublicRepositories"></a>

```go
AllowsPublicRepositories interface{}
```

- *Type:* interface{}

Whether public repositories can be added to the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/actions_runner_group#allows_public_repositories ActionsRunnerGroup#allows_public_repositories}

---

##### `RestrictedToWorkflows`<sup>Optional</sup> <a name="RestrictedToWorkflows" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.restrictedToWorkflows"></a>

```go
RestrictedToWorkflows interface{}
```

- *Type:* interface{}

If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array.

Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/actions_runner_group#restricted_to_workflows ActionsRunnerGroup#restricted_to_workflows}

---

##### `SelectedRepositoryIds`<sup>Optional</sup> <a name="SelectedRepositoryIds" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.selectedRepositoryIds"></a>

```go
SelectedRepositoryIds *[]*f64
```

- *Type:* *[]*f64

List of repository IDs that can access the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/actions_runner_group#selected_repository_ids ActionsRunnerGroup#selected_repository_ids}

---

##### `SelectedWorkflows`<sup>Optional</sup> <a name="SelectedWorkflows" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.selectedWorkflows"></a>

```go
SelectedWorkflows *[]*string
```

- *Type:* *[]*string

List of workflows the runner group should be allowed to run.

This setting will be ignored unless restricted_to_workflows is set to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/actions_runner_group#selected_workflows ActionsRunnerGroup#selected_workflows}

---



