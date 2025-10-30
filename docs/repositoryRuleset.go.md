# `repositoryRuleset` Submodule <a name="`repositoryRuleset` Submodule" id="@cdktf/provider-github.repositoryRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryRuleset <a name="RepositoryRuleset" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset github_repository_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRuleset(scope Construct, id *string, config RepositoryRulesetConfig) RepositoryRuleset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig">RepositoryRulesetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig">RepositoryRulesetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putBypassActors">PutBypassActors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetBypassActors">ResetBypassActors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetRepository">ResetRepository</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBypassActors` <a name="PutBypassActors" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putBypassActors"></a>

```go
func PutBypassActors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putBypassActors.parameter.value"></a>

- *Type:* interface{}

---

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putConditions"></a>

```go
func PutConditions(value RepositoryRulesetConditions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions">RepositoryRulesetConditions</a>

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putRules"></a>

```go
func PutRules(value RepositoryRulesetRules)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules">RepositoryRulesetRules</a>

---

##### `ResetBypassActors` <a name="ResetBypassActors" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetBypassActors"></a>

```go
func ResetBypassActors()
```

##### `ResetConditions` <a name="ResetConditions" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetConditions"></a>

```go
func ResetConditions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetId"></a>

```go
func ResetId()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetRepository"></a>

```go
func ResetRepository()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RepositoryRuleset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.RepositoryRuleset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.RepositoryRuleset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.RepositoryRuleset_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.RepositoryRuleset_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RepositoryRuleset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RepositoryRuleset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RepositoryRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RepositoryRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.bypassActors">BypassActors</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList">RepositoryRulesetBypassActorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference">RepositoryRulesetConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.nodeId">NodeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference">RepositoryRulesetRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.rulesetId">RulesetId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.bypassActorsInput">BypassActorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.conditionsInput">ConditionsInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions">RepositoryRulesetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.enforcementInput">EnforcementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.rulesInput">RulesInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules">RepositoryRulesetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.enforcement">Enforcement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.target">Target</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BypassActors`<sup>Required</sup> <a name="BypassActors" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.bypassActors"></a>

```go
func BypassActors() RepositoryRulesetBypassActorsList
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList">RepositoryRulesetBypassActorsList</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.conditions"></a>

```go
func Conditions() RepositoryRulesetConditionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference">RepositoryRulesetConditionsOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.nodeId"></a>

```go
func NodeId() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.rules"></a>

```go
func Rules() RepositoryRulesetRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference">RepositoryRulesetRulesOutputReference</a>

---

##### `RulesetId`<sup>Required</sup> <a name="RulesetId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.rulesetId"></a>

```go
func RulesetId() *f64
```

- *Type:* *f64

---

##### `BypassActorsInput`<sup>Optional</sup> <a name="BypassActorsInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.bypassActorsInput"></a>

```go
func BypassActorsInput() interface{}
```

- *Type:* interface{}

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.conditionsInput"></a>

```go
func ConditionsInput() RepositoryRulesetConditions
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions">RepositoryRulesetConditions</a>

---

##### `EnforcementInput`<sup>Optional</sup> <a name="EnforcementInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.enforcementInput"></a>

```go
func EnforcementInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.rulesInput"></a>

```go
func RulesInput() RepositoryRulesetRules
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules">RepositoryRulesetRules</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `Enforcement`<sup>Required</sup> <a name="Enforcement" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.enforcement"></a>

```go
func Enforcement() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryRulesetBypassActors <a name="RepositoryRulesetBypassActors" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

&repositoryruleset.RepositoryRulesetBypassActors {
	ActorType: *string,
	BypassMode: *string,
	ActorId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors.property.actorType">ActorType</a></code> | <code>*string</code> | The type of actor that can bypass a ruleset. See https://docs.github.com/en/rest/repos/rules for more information. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors.property.bypassMode">BypassMode</a></code> | <code>*string</code> | When the specified actor can bypass the ruleset. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors.property.actorId">ActorId</a></code> | <code>*f64</code> | The ID of the actor that can bypass a ruleset. |

---

##### `ActorType`<sup>Required</sup> <a name="ActorType" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors.property.actorType"></a>

```go
ActorType *string
```

- *Type:* *string

The type of actor that can bypass a ruleset. See https://docs.github.com/en/rest/repos/rules for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#actor_type RepositoryRuleset#actor_type}

---

##### `BypassMode`<sup>Required</sup> <a name="BypassMode" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors.property.bypassMode"></a>

```go
BypassMode *string
```

- *Type:* *string

When the specified actor can bypass the ruleset.

pull_request means that an actor can only bypass rules on pull requests. Can be one of: `always`, `pull_request`, `exempt`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#bypass_mode RepositoryRuleset#bypass_mode}

---

##### `ActorId`<sup>Optional</sup> <a name="ActorId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors.property.actorId"></a>

```go
ActorId *f64
```

- *Type:* *f64

The ID of the actor that can bypass a ruleset.

When `actor_type` is `OrganizationAdmin`, this should be set to `1`. Some resources such as DeployKey do not have an ID and this should be omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#actor_id RepositoryRuleset#actor_id}

---

### RepositoryRulesetConditions <a name="RepositoryRulesetConditions" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

&repositoryruleset.RepositoryRulesetConditions {
	RefName: github.com/cdktf/cdktf-provider-github-go/github/v15.repositoryRuleset.RepositoryRulesetConditionsRefName,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions.property.refName">RefName</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName">RepositoryRulesetConditionsRefName</a></code> | ref_name block. |

---

##### `RefName`<sup>Required</sup> <a name="RefName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions.property.refName"></a>

```go
RefName RepositoryRulesetConditionsRefName
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName">RepositoryRulesetConditionsRefName</a>

ref_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#ref_name RepositoryRuleset#ref_name}

---

### RepositoryRulesetConditionsRefName <a name="RepositoryRulesetConditionsRefName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

&repositoryruleset.RepositoryRulesetConditionsRefName {
	Exclude: *[]*string,
	Include: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName.property.exclude">Exclude</a></code> | <code>*[]*string</code> | Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName.property.include">Include</a></code> | <code>*[]*string</code> | Array of ref names or patterns to include. |

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName.property.exclude"></a>

```go
Exclude *[]*string
```

- *Type:* *[]*string

Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#exclude RepositoryRuleset#exclude}

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName.property.include"></a>

```go
Include *[]*string
```

- *Type:* *[]*string

Array of ref names or patterns to include.

One of these patterns must match for the condition to pass. Also accepts `~DEFAULT_BRANCH` to include the default branch or `~ALL` to include all branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#include RepositoryRuleset#include}

---

### RepositoryRulesetConfig <a name="RepositoryRulesetConfig" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

&repositoryruleset.RepositoryRulesetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Enforcement: *string,
	Name: *string,
	Rules: github.com/cdktf/cdktf-provider-github-go/github/v15.repositoryRuleset.RepositoryRulesetRules,
	Target: *string,
	BypassActors: interface{},
	Conditions: github.com/cdktf/cdktf-provider-github-go/github/v15.repositoryRuleset.RepositoryRulesetConditions,
	Id: *string,
	Repository: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.enforcement">Enforcement</a></code> | <code>*string</code> | Possible values for Enforcement are `disabled`, `active`, `evaluate`. Note: `evaluate` is currently only supported for owners of type `organization`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.name">Name</a></code> | <code>*string</code> | The name of the ruleset. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules">RepositoryRulesetRules</a></code> | rules block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.target">Target</a></code> | <code>*string</code> | Possible values are `branch`, `push` and `tag`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.bypassActors">BypassActors</a></code> | <code>interface{}</code> | bypass_actors block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions">RepositoryRulesetConditions</a></code> | conditions block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#id RepositoryRuleset#id}. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.repository">Repository</a></code> | <code>*string</code> | Name of the repository to apply rulset to. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Enforcement`<sup>Required</sup> <a name="Enforcement" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.enforcement"></a>

```go
Enforcement *string
```

- *Type:* *string

Possible values for Enforcement are `disabled`, `active`, `evaluate`. Note: `evaluate` is currently only supported for owners of type `organization`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#enforcement RepositoryRuleset#enforcement}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#name RepositoryRuleset#name}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.rules"></a>

```go
Rules RepositoryRulesetRules
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules">RepositoryRulesetRules</a>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#rules RepositoryRuleset#rules}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.target"></a>

```go
Target *string
```

- *Type:* *string

Possible values are `branch`, `push` and `tag`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#target RepositoryRuleset#target}

---

##### `BypassActors`<sup>Optional</sup> <a name="BypassActors" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.bypassActors"></a>

```go
BypassActors interface{}
```

- *Type:* interface{}

bypass_actors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#bypass_actors RepositoryRuleset#bypass_actors}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.conditions"></a>

```go
Conditions RepositoryRulesetConditions
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions">RepositoryRulesetConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#conditions RepositoryRuleset#conditions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#id RepositoryRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

Name of the repository to apply rulset to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#repository RepositoryRuleset#repository}

---

### RepositoryRulesetRules <a name="RepositoryRulesetRules" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

&repositoryruleset.RepositoryRulesetRules {
	BranchNamePattern: github.com/cdktf/cdktf-provider-github-go/github/v15.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern,
	CommitAuthorEmailPattern: github.com/cdktf/cdktf-provider-github-go/github/v15.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern,
	CommitMessagePattern: github.com/cdktf/cdktf-provider-github-go/github/v15.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern,
	CommitterEmailPattern: github.com/cdktf/cdktf-provider-github-go/github/v15.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern,
	Creation: interface{},
	Deletion: interface{},
	FileExtensionRestriction: github.com/cdktf/cdktf-provider-github-go/github/v15.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestriction,
	FilePathRestriction: github.com/cdktf/cdktf-provider-github-go/github/v15.repositoryRuleset.RepositoryRulesetRulesFilePathRestriction,
	MaxFileSize: github.com/cdktf/cdktf-provider-github-go/github/v15.repositoryRuleset.RepositoryRulesetRulesMaxFileSize,
	MergeQueue: github.com/cdktf/cdktf-provider-github-go/github/v15.repositoryRuleset.RepositoryRulesetRulesMergeQueue,
	NonFastForward: interface{},
	PullRequest: github.com/cdktf/cdktf-provider-github-go/github/v15.repositoryRuleset.RepositoryRulesetRulesPullRequest,
	RequiredCodeScanning: github.com/cdktf/cdktf-provider-github-go/github/v15.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanning,
	RequiredDeployments: github.com/cdktf/cdktf-provider-github-go/github/v15.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments,
	RequiredLinearHistory: interface{},
	RequiredSignatures: interface{},
	RequiredStatusChecks: github.com/cdktf/cdktf-provider-github-go/github/v15.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks,
	TagNamePattern: github.com/cdktf/cdktf-provider-github-go/github/v15.repositoryRuleset.RepositoryRulesetRulesTagNamePattern,
	Update: interface{},
	UpdateAllowsFetchAndMerge: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.branchNamePattern">BranchNamePattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern">RepositoryRulesetRulesBranchNamePattern</a></code> | branch_name_pattern block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.commitAuthorEmailPattern">CommitAuthorEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern">RepositoryRulesetRulesCommitAuthorEmailPattern</a></code> | commit_author_email_pattern block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.commitMessagePattern">CommitMessagePattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern">RepositoryRulesetRulesCommitMessagePattern</a></code> | commit_message_pattern block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.committerEmailPattern">CommitterEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern">RepositoryRulesetRulesCommitterEmailPattern</a></code> | committer_email_pattern block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.creation">Creation</a></code> | <code>interface{}</code> | Only allow users with bypass permission to create matching refs. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.deletion">Deletion</a></code> | <code>interface{}</code> | Only allow users with bypass permissions to delete matching refs. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.fileExtensionRestriction">FileExtensionRestriction</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestriction">RepositoryRulesetRulesFileExtensionRestriction</a></code> | file_extension_restriction block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.filePathRestriction">FilePathRestriction</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestriction">RepositoryRulesetRulesFilePathRestriction</a></code> | file_path_restriction block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.maxFileSize">MaxFileSize</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSize">RepositoryRulesetRulesMaxFileSize</a></code> | max_file_size block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.mergeQueue">MergeQueue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue">RepositoryRulesetRulesMergeQueue</a></code> | merge_queue block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.nonFastForward">NonFastForward</a></code> | <code>interface{}</code> | Prevent users with push access from force pushing to branches. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest">RepositoryRulesetRulesPullRequest</a></code> | pull_request block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredCodeScanning">RequiredCodeScanning</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanning">RepositoryRulesetRulesRequiredCodeScanning</a></code> | required_code_scanning block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredDeployments">RequiredDeployments</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments">RepositoryRulesetRulesRequiredDeployments</a></code> | required_deployments block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredLinearHistory">RequiredLinearHistory</a></code> | <code>interface{}</code> | Prevent merge commits from being pushed to matching branches. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredSignatures">RequiredSignatures</a></code> | <code>interface{}</code> | Commits pushed to matching branches must have verified signatures. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredStatusChecks">RequiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks">RepositoryRulesetRulesRequiredStatusChecks</a></code> | required_status_checks block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.tagNamePattern">TagNamePattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern">RepositoryRulesetRulesTagNamePattern</a></code> | tag_name_pattern block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.update">Update</a></code> | <code>interface{}</code> | Only allow users with bypass permission to update matching refs. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.updateAllowsFetchAndMerge">UpdateAllowsFetchAndMerge</a></code> | <code>interface{}</code> | Branch can pull changes from its upstream repository. |

---

##### `BranchNamePattern`<sup>Optional</sup> <a name="BranchNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.branchNamePattern"></a>

```go
BranchNamePattern RepositoryRulesetRulesBranchNamePattern
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern">RepositoryRulesetRulesBranchNamePattern</a>

branch_name_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#branch_name_pattern RepositoryRuleset#branch_name_pattern}

---

##### `CommitAuthorEmailPattern`<sup>Optional</sup> <a name="CommitAuthorEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.commitAuthorEmailPattern"></a>

```go
CommitAuthorEmailPattern RepositoryRulesetRulesCommitAuthorEmailPattern
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern">RepositoryRulesetRulesCommitAuthorEmailPattern</a>

commit_author_email_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#commit_author_email_pattern RepositoryRuleset#commit_author_email_pattern}

---

##### `CommitMessagePattern`<sup>Optional</sup> <a name="CommitMessagePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.commitMessagePattern"></a>

```go
CommitMessagePattern RepositoryRulesetRulesCommitMessagePattern
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern">RepositoryRulesetRulesCommitMessagePattern</a>

commit_message_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#commit_message_pattern RepositoryRuleset#commit_message_pattern}

---

##### `CommitterEmailPattern`<sup>Optional</sup> <a name="CommitterEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.committerEmailPattern"></a>

```go
CommitterEmailPattern RepositoryRulesetRulesCommitterEmailPattern
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern">RepositoryRulesetRulesCommitterEmailPattern</a>

committer_email_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#committer_email_pattern RepositoryRuleset#committer_email_pattern}

---

##### `Creation`<sup>Optional</sup> <a name="Creation" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.creation"></a>

```go
Creation interface{}
```

- *Type:* interface{}

Only allow users with bypass permission to create matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#creation RepositoryRuleset#creation}

---

##### `Deletion`<sup>Optional</sup> <a name="Deletion" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.deletion"></a>

```go
Deletion interface{}
```

- *Type:* interface{}

Only allow users with bypass permissions to delete matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#deletion RepositoryRuleset#deletion}

---

##### `FileExtensionRestriction`<sup>Optional</sup> <a name="FileExtensionRestriction" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.fileExtensionRestriction"></a>

```go
FileExtensionRestriction RepositoryRulesetRulesFileExtensionRestriction
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestriction">RepositoryRulesetRulesFileExtensionRestriction</a>

file_extension_restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#file_extension_restriction RepositoryRuleset#file_extension_restriction}

---

##### `FilePathRestriction`<sup>Optional</sup> <a name="FilePathRestriction" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.filePathRestriction"></a>

```go
FilePathRestriction RepositoryRulesetRulesFilePathRestriction
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestriction">RepositoryRulesetRulesFilePathRestriction</a>

file_path_restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#file_path_restriction RepositoryRuleset#file_path_restriction}

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.maxFileSize"></a>

```go
MaxFileSize RepositoryRulesetRulesMaxFileSize
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSize">RepositoryRulesetRulesMaxFileSize</a>

max_file_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#max_file_size RepositoryRuleset#max_file_size}

---

##### `MergeQueue`<sup>Optional</sup> <a name="MergeQueue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.mergeQueue"></a>

```go
MergeQueue RepositoryRulesetRulesMergeQueue
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue">RepositoryRulesetRulesMergeQueue</a>

merge_queue block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#merge_queue RepositoryRuleset#merge_queue}

---

##### `NonFastForward`<sup>Optional</sup> <a name="NonFastForward" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.nonFastForward"></a>

```go
NonFastForward interface{}
```

- *Type:* interface{}

Prevent users with push access from force pushing to branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#non_fast_forward RepositoryRuleset#non_fast_forward}

---

##### `PullRequest`<sup>Optional</sup> <a name="PullRequest" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.pullRequest"></a>

```go
PullRequest RepositoryRulesetRulesPullRequest
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest">RepositoryRulesetRulesPullRequest</a>

pull_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#pull_request RepositoryRuleset#pull_request}

---

##### `RequiredCodeScanning`<sup>Optional</sup> <a name="RequiredCodeScanning" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredCodeScanning"></a>

```go
RequiredCodeScanning RepositoryRulesetRulesRequiredCodeScanning
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanning">RepositoryRulesetRulesRequiredCodeScanning</a>

required_code_scanning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#required_code_scanning RepositoryRuleset#required_code_scanning}

---

##### `RequiredDeployments`<sup>Optional</sup> <a name="RequiredDeployments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredDeployments"></a>

```go
RequiredDeployments RepositoryRulesetRulesRequiredDeployments
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments">RepositoryRulesetRulesRequiredDeployments</a>

required_deployments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#required_deployments RepositoryRuleset#required_deployments}

---

##### `RequiredLinearHistory`<sup>Optional</sup> <a name="RequiredLinearHistory" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredLinearHistory"></a>

```go
RequiredLinearHistory interface{}
```

- *Type:* interface{}

Prevent merge commits from being pushed to matching branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#required_linear_history RepositoryRuleset#required_linear_history}

---

##### `RequiredSignatures`<sup>Optional</sup> <a name="RequiredSignatures" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredSignatures"></a>

```go
RequiredSignatures interface{}
```

- *Type:* interface{}

Commits pushed to matching branches must have verified signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#required_signatures RepositoryRuleset#required_signatures}

---

##### `RequiredStatusChecks`<sup>Optional</sup> <a name="RequiredStatusChecks" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredStatusChecks"></a>

```go
RequiredStatusChecks RepositoryRulesetRulesRequiredStatusChecks
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks">RepositoryRulesetRulesRequiredStatusChecks</a>

required_status_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#required_status_checks RepositoryRuleset#required_status_checks}

---

##### `TagNamePattern`<sup>Optional</sup> <a name="TagNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.tagNamePattern"></a>

```go
TagNamePattern RepositoryRulesetRulesTagNamePattern
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern">RepositoryRulesetRulesTagNamePattern</a>

tag_name_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#tag_name_pattern RepositoryRuleset#tag_name_pattern}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.update"></a>

```go
Update interface{}
```

- *Type:* interface{}

Only allow users with bypass permission to update matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#update RepositoryRuleset#update}

---

##### `UpdateAllowsFetchAndMerge`<sup>Optional</sup> <a name="UpdateAllowsFetchAndMerge" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.updateAllowsFetchAndMerge"></a>

```go
UpdateAllowsFetchAndMerge interface{}
```

- *Type:* interface{}

Branch can pull changes from its upstream repository.

This is only applicable to forked repositories. Requires `update` to be set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#update_allows_fetch_and_merge RepositoryRuleset#update_allows_fetch_and_merge}

---

### RepositoryRulesetRulesBranchNamePattern <a name="RepositoryRulesetRulesBranchNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

&repositoryruleset.RepositoryRulesetRulesBranchNamePattern {
	Operator: *string,
	Pattern: *string,
	Name: *string,
	Negate: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.operator">Operator</a></code> | <code>*string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.pattern">Pattern</a></code> | <code>*string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.name">Name</a></code> | <code>*string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.negate">Negate</a></code> | <code>interface{}</code> | If true, the rule will fail if the pattern matches. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.name"></a>

```go
Name *string
```

- *Type:* *string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#name RepositoryRuleset#name}

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.negate"></a>

```go
Negate interface{}
```

- *Type:* interface{}

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}

---

### RepositoryRulesetRulesCommitAuthorEmailPattern <a name="RepositoryRulesetRulesCommitAuthorEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

&repositoryruleset.RepositoryRulesetRulesCommitAuthorEmailPattern {
	Operator: *string,
	Pattern: *string,
	Name: *string,
	Negate: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.operator">Operator</a></code> | <code>*string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.pattern">Pattern</a></code> | <code>*string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.name">Name</a></code> | <code>*string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.negate">Negate</a></code> | <code>interface{}</code> | If true, the rule will fail if the pattern matches. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.name"></a>

```go
Name *string
```

- *Type:* *string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#name RepositoryRuleset#name}

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.negate"></a>

```go
Negate interface{}
```

- *Type:* interface{}

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}

---

### RepositoryRulesetRulesCommitMessagePattern <a name="RepositoryRulesetRulesCommitMessagePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

&repositoryruleset.RepositoryRulesetRulesCommitMessagePattern {
	Operator: *string,
	Pattern: *string,
	Name: *string,
	Negate: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.operator">Operator</a></code> | <code>*string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.pattern">Pattern</a></code> | <code>*string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.name">Name</a></code> | <code>*string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.negate">Negate</a></code> | <code>interface{}</code> | If true, the rule will fail if the pattern matches. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.name"></a>

```go
Name *string
```

- *Type:* *string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#name RepositoryRuleset#name}

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.negate"></a>

```go
Negate interface{}
```

- *Type:* interface{}

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}

---

### RepositoryRulesetRulesCommitterEmailPattern <a name="RepositoryRulesetRulesCommitterEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

&repositoryruleset.RepositoryRulesetRulesCommitterEmailPattern {
	Operator: *string,
	Pattern: *string,
	Name: *string,
	Negate: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.operator">Operator</a></code> | <code>*string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.pattern">Pattern</a></code> | <code>*string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.name">Name</a></code> | <code>*string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.negate">Negate</a></code> | <code>interface{}</code> | If true, the rule will fail if the pattern matches. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.name"></a>

```go
Name *string
```

- *Type:* *string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#name RepositoryRuleset#name}

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.negate"></a>

```go
Negate interface{}
```

- *Type:* interface{}

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}

---

### RepositoryRulesetRulesFileExtensionRestriction <a name="RepositoryRulesetRulesFileExtensionRestriction" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestriction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

&repositoryruleset.RepositoryRulesetRulesFileExtensionRestriction {
	RestrictedFileExtensions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestriction.property.restrictedFileExtensions">RestrictedFileExtensions</a></code> | <code>*[]*string</code> | A list of file extensions. |

---

##### `RestrictedFileExtensions`<sup>Required</sup> <a name="RestrictedFileExtensions" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestriction.property.restrictedFileExtensions"></a>

```go
RestrictedFileExtensions *[]*string
```

- *Type:* *[]*string

A list of file extensions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#restricted_file_extensions RepositoryRuleset#restricted_file_extensions}

---

### RepositoryRulesetRulesFilePathRestriction <a name="RepositoryRulesetRulesFilePathRestriction" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestriction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

&repositoryruleset.RepositoryRulesetRulesFilePathRestriction {
	RestrictedFilePaths: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestriction.property.restrictedFilePaths">RestrictedFilePaths</a></code> | <code>*[]*string</code> | The file paths that are restricted from being pushed to the commit graph. |

---

##### `RestrictedFilePaths`<sup>Required</sup> <a name="RestrictedFilePaths" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestriction.property.restrictedFilePaths"></a>

```go
RestrictedFilePaths *[]*string
```

- *Type:* *[]*string

The file paths that are restricted from being pushed to the commit graph.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#restricted_file_paths RepositoryRuleset#restricted_file_paths}

---

### RepositoryRulesetRulesMaxFileSize <a name="RepositoryRulesetRulesMaxFileSize" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSize.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

&repositoryruleset.RepositoryRulesetRulesMaxFileSize {
	MaxFileSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSize.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | The maximum allowed size of a file in bytes. |

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSize.property.maxFileSize"></a>

```go
MaxFileSize *f64
```

- *Type:* *f64

The maximum allowed size of a file in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#max_file_size RepositoryRuleset#max_file_size}

---

### RepositoryRulesetRulesMergeQueue <a name="RepositoryRulesetRulesMergeQueue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

&repositoryruleset.RepositoryRulesetRulesMergeQueue {
	CheckResponseTimeoutMinutes: *f64,
	GroupingStrategy: *string,
	MaxEntriesToBuild: *f64,
	MaxEntriesToMerge: *f64,
	MergeMethod: *string,
	MinEntriesToMerge: *f64,
	MinEntriesToMergeWaitMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue.property.checkResponseTimeoutMinutes">CheckResponseTimeoutMinutes</a></code> | <code>*f64</code> | Maximum time for a required status check to report a conclusion. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue.property.groupingStrategy">GroupingStrategy</a></code> | <code>*string</code> | When set to ALLGREEN, the merge commit created by merge queue for each PR in the group must pass all required checks to merge. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue.property.maxEntriesToBuild">MaxEntriesToBuild</a></code> | <code>*f64</code> | Limit the number of queued pull requests requesting checks and workflow runs at the same time. Defaults to `5`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue.property.maxEntriesToMerge">MaxEntriesToMerge</a></code> | <code>*f64</code> | The maximum number of PRs that will be merged together in a group. Defaults to `5`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue.property.mergeMethod">MergeMethod</a></code> | <code>*string</code> | Method to use when merging changes from queued pull requests. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue.property.minEntriesToMerge">MinEntriesToMerge</a></code> | <code>*f64</code> | The minimum number of PRs that will be merged together in a group. Defaults to `1`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue.property.minEntriesToMergeWaitMinutes">MinEntriesToMergeWaitMinutes</a></code> | <code>*f64</code> | The time merge queue should wait after the first PR is added to the queue for the minimum group size to be met. |

---

##### `CheckResponseTimeoutMinutes`<sup>Optional</sup> <a name="CheckResponseTimeoutMinutes" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue.property.checkResponseTimeoutMinutes"></a>

```go
CheckResponseTimeoutMinutes *f64
```

- *Type:* *f64

Maximum time for a required status check to report a conclusion.

After this much time has elapsed, checks that have not reported a conclusion will be assumed to have failed. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#check_response_timeout_minutes RepositoryRuleset#check_response_timeout_minutes}

---

##### `GroupingStrategy`<sup>Optional</sup> <a name="GroupingStrategy" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue.property.groupingStrategy"></a>

```go
GroupingStrategy *string
```

- *Type:* *string

When set to ALLGREEN, the merge commit created by merge queue for each PR in the group must pass all required checks to merge.

When set to HEADGREEN, only the commit at the head of the merge group, i.e. the commit containing changes from all of the PRs in the group, must pass its required checks to merge. Can be one of: ALLGREEN, HEADGREEN. Defaults to `ALLGREEN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#grouping_strategy RepositoryRuleset#grouping_strategy}

---

##### `MaxEntriesToBuild`<sup>Optional</sup> <a name="MaxEntriesToBuild" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue.property.maxEntriesToBuild"></a>

```go
MaxEntriesToBuild *f64
```

- *Type:* *f64

Limit the number of queued pull requests requesting checks and workflow runs at the same time. Defaults to `5`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#max_entries_to_build RepositoryRuleset#max_entries_to_build}

---

##### `MaxEntriesToMerge`<sup>Optional</sup> <a name="MaxEntriesToMerge" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue.property.maxEntriesToMerge"></a>

```go
MaxEntriesToMerge *f64
```

- *Type:* *f64

The maximum number of PRs that will be merged together in a group. Defaults to `5`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#max_entries_to_merge RepositoryRuleset#max_entries_to_merge}

---

##### `MergeMethod`<sup>Optional</sup> <a name="MergeMethod" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue.property.mergeMethod"></a>

```go
MergeMethod *string
```

- *Type:* *string

Method to use when merging changes from queued pull requests.

Can be one of: MERGE, SQUASH, REBASE. Defaults to `MERGE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#merge_method RepositoryRuleset#merge_method}

---

##### `MinEntriesToMerge`<sup>Optional</sup> <a name="MinEntriesToMerge" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue.property.minEntriesToMerge"></a>

```go
MinEntriesToMerge *f64
```

- *Type:* *f64

The minimum number of PRs that will be merged together in a group. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#min_entries_to_merge RepositoryRuleset#min_entries_to_merge}

---

##### `MinEntriesToMergeWaitMinutes`<sup>Optional</sup> <a name="MinEntriesToMergeWaitMinutes" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue.property.minEntriesToMergeWaitMinutes"></a>

```go
MinEntriesToMergeWaitMinutes *f64
```

- *Type:* *f64

The time merge queue should wait after the first PR is added to the queue for the minimum group size to be met.

After this time has elapsed, the minimum group size will be ignored and a smaller group will be merged. Defaults to `5`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#min_entries_to_merge_wait_minutes RepositoryRuleset#min_entries_to_merge_wait_minutes}

---

### RepositoryRulesetRulesPullRequest <a name="RepositoryRulesetRulesPullRequest" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

&repositoryruleset.RepositoryRulesetRulesPullRequest {
	DismissStaleReviewsOnPush: interface{},
	RequireCodeOwnerReview: interface{},
	RequiredApprovingReviewCount: *f64,
	RequiredReviewThreadResolution: interface{},
	RequireLastPushApproval: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.dismissStaleReviewsOnPush">DismissStaleReviewsOnPush</a></code> | <code>interface{}</code> | New, reviewable commits pushed will dismiss previous pull request review approvals. Defaults to `false`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requireCodeOwnerReview">RequireCodeOwnerReview</a></code> | <code>interface{}</code> | Require an approving review in pull requests that modify files that have a designated code owner. Defaults to `false`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requiredApprovingReviewCount">RequiredApprovingReviewCount</a></code> | <code>*f64</code> | The number of approving reviews that are required before a pull request can be merged. Defaults to `0`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requiredReviewThreadResolution">RequiredReviewThreadResolution</a></code> | <code>interface{}</code> | All conversations on code must be resolved before a pull request can be merged. Defaults to `false`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requireLastPushApproval">RequireLastPushApproval</a></code> | <code>interface{}</code> | Whether the most recent reviewable push must be approved by someone other than the person who pushed it. |

---

##### `DismissStaleReviewsOnPush`<sup>Optional</sup> <a name="DismissStaleReviewsOnPush" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.dismissStaleReviewsOnPush"></a>

```go
DismissStaleReviewsOnPush interface{}
```

- *Type:* interface{}

New, reviewable commits pushed will dismiss previous pull request review approvals. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#dismiss_stale_reviews_on_push RepositoryRuleset#dismiss_stale_reviews_on_push}

---

##### `RequireCodeOwnerReview`<sup>Optional</sup> <a name="RequireCodeOwnerReview" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requireCodeOwnerReview"></a>

```go
RequireCodeOwnerReview interface{}
```

- *Type:* interface{}

Require an approving review in pull requests that modify files that have a designated code owner. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#require_code_owner_review RepositoryRuleset#require_code_owner_review}

---

##### `RequiredApprovingReviewCount`<sup>Optional</sup> <a name="RequiredApprovingReviewCount" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requiredApprovingReviewCount"></a>

```go
RequiredApprovingReviewCount *f64
```

- *Type:* *f64

The number of approving reviews that are required before a pull request can be merged. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#required_approving_review_count RepositoryRuleset#required_approving_review_count}

---

##### `RequiredReviewThreadResolution`<sup>Optional</sup> <a name="RequiredReviewThreadResolution" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requiredReviewThreadResolution"></a>

```go
RequiredReviewThreadResolution interface{}
```

- *Type:* interface{}

All conversations on code must be resolved before a pull request can be merged. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#required_review_thread_resolution RepositoryRuleset#required_review_thread_resolution}

---

##### `RequireLastPushApproval`<sup>Optional</sup> <a name="RequireLastPushApproval" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requireLastPushApproval"></a>

```go
RequireLastPushApproval interface{}
```

- *Type:* interface{}

Whether the most recent reviewable push must be approved by someone other than the person who pushed it.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#require_last_push_approval RepositoryRuleset#require_last_push_approval}

---

### RepositoryRulesetRulesRequiredCodeScanning <a name="RepositoryRulesetRulesRequiredCodeScanning" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanning.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

&repositoryruleset.RepositoryRulesetRulesRequiredCodeScanning {
	RequiredCodeScanningTool: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanning.property.requiredCodeScanningTool">RequiredCodeScanningTool</a></code> | <code>interface{}</code> | required_code_scanning_tool block. |

---

##### `RequiredCodeScanningTool`<sup>Required</sup> <a name="RequiredCodeScanningTool" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanning.property.requiredCodeScanningTool"></a>

```go
RequiredCodeScanningTool interface{}
```

- *Type:* interface{}

required_code_scanning_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#required_code_scanning_tool RepositoryRuleset#required_code_scanning_tool}

---

### RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningTool <a name="RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningTool" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningTool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

&repositoryruleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningTool {
	AlertsThreshold: *string,
	SecurityAlertsThreshold: *string,
	Tool: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.alertsThreshold">AlertsThreshold</a></code> | <code>*string</code> | The severity level at which code scanning results that raise alerts block a reference update. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.securityAlertsThreshold">SecurityAlertsThreshold</a></code> | <code>*string</code> | The severity level at which code scanning results that raise security alerts block a reference update. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.tool">Tool</a></code> | <code>*string</code> | The name of a code scanning tool. |

---

##### `AlertsThreshold`<sup>Required</sup> <a name="AlertsThreshold" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.alertsThreshold"></a>

```go
AlertsThreshold *string
```

- *Type:* *string

The severity level at which code scanning results that raise alerts block a reference update.

Can be one of: `none`, `errors`, `errors_and_warnings`, `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#alerts_threshold RepositoryRuleset#alerts_threshold}

---

##### `SecurityAlertsThreshold`<sup>Required</sup> <a name="SecurityAlertsThreshold" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.securityAlertsThreshold"></a>

```go
SecurityAlertsThreshold *string
```

- *Type:* *string

The severity level at which code scanning results that raise security alerts block a reference update.

Can be one of: `none`, `critical`, `high_or_higher`, `medium_or_higher`, `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#security_alerts_threshold RepositoryRuleset#security_alerts_threshold}

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.tool"></a>

```go
Tool *string
```

- *Type:* *string

The name of a code scanning tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#tool RepositoryRuleset#tool}

---

### RepositoryRulesetRulesRequiredDeployments <a name="RepositoryRulesetRulesRequiredDeployments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

&repositoryruleset.RepositoryRulesetRulesRequiredDeployments {
	RequiredDeploymentEnvironments: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments.property.requiredDeploymentEnvironments">RequiredDeploymentEnvironments</a></code> | <code>*[]*string</code> | The environments that must be successfully deployed to before branches can be merged. |

---

##### `RequiredDeploymentEnvironments`<sup>Required</sup> <a name="RequiredDeploymentEnvironments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments.property.requiredDeploymentEnvironments"></a>

```go
RequiredDeploymentEnvironments *[]*string
```

- *Type:* *[]*string

The environments that must be successfully deployed to before branches can be merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#required_deployment_environments RepositoryRuleset#required_deployment_environments}

---

### RepositoryRulesetRulesRequiredStatusChecks <a name="RepositoryRulesetRulesRequiredStatusChecks" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

&repositoryruleset.RepositoryRulesetRulesRequiredStatusChecks {
	RequiredCheck: interface{},
	DoNotEnforceOnCreate: interface{},
	StrictRequiredStatusChecksPolicy: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks.property.requiredCheck">RequiredCheck</a></code> | <code>interface{}</code> | required_check block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks.property.doNotEnforceOnCreate">DoNotEnforceOnCreate</a></code> | <code>interface{}</code> | Allow repositories and branches to be created if a check would otherwise prohibit it. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks.property.strictRequiredStatusChecksPolicy">StrictRequiredStatusChecksPolicy</a></code> | <code>interface{}</code> | Whether pull requests targeting a matching branch must be tested with the latest code. |

---

##### `RequiredCheck`<sup>Required</sup> <a name="RequiredCheck" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks.property.requiredCheck"></a>

```go
RequiredCheck interface{}
```

- *Type:* interface{}

required_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#required_check RepositoryRuleset#required_check}

---

##### `DoNotEnforceOnCreate`<sup>Optional</sup> <a name="DoNotEnforceOnCreate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks.property.doNotEnforceOnCreate"></a>

```go
DoNotEnforceOnCreate interface{}
```

- *Type:* interface{}

Allow repositories and branches to be created if a check would otherwise prohibit it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#do_not_enforce_on_create RepositoryRuleset#do_not_enforce_on_create}

---

##### `StrictRequiredStatusChecksPolicy`<sup>Optional</sup> <a name="StrictRequiredStatusChecksPolicy" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks.property.strictRequiredStatusChecksPolicy"></a>

```go
StrictRequiredStatusChecksPolicy interface{}
```

- *Type:* interface{}

Whether pull requests targeting a matching branch must be tested with the latest code.

This setting will not take effect unless at least one status check is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#strict_required_status_checks_policy RepositoryRuleset#strict_required_status_checks_policy}

---

### RepositoryRulesetRulesRequiredStatusChecksRequiredCheck <a name="RepositoryRulesetRulesRequiredStatusChecksRequiredCheck" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

&repositoryruleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck {
	Context: *string,
	IntegrationId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck.property.context">Context</a></code> | <code>*string</code> | The status check context name that must be present on the commit. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck.property.integrationId">IntegrationId</a></code> | <code>*f64</code> | The optional integration ID that this status check must originate from. |

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck.property.context"></a>

```go
Context *string
```

- *Type:* *string

The status check context name that must be present on the commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#context RepositoryRuleset#context}

---

##### `IntegrationId`<sup>Optional</sup> <a name="IntegrationId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck.property.integrationId"></a>

```go
IntegrationId *f64
```

- *Type:* *f64

The optional integration ID that this status check must originate from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#integration_id RepositoryRuleset#integration_id}

---

### RepositoryRulesetRulesTagNamePattern <a name="RepositoryRulesetRulesTagNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

&repositoryruleset.RepositoryRulesetRulesTagNamePattern {
	Operator: *string,
	Pattern: *string,
	Name: *string,
	Negate: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.operator">Operator</a></code> | <code>*string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.pattern">Pattern</a></code> | <code>*string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.name">Name</a></code> | <code>*string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.negate">Negate</a></code> | <code>interface{}</code> | If true, the rule will fail if the pattern matches. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.name"></a>

```go
Name *string
```

- *Type:* *string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#name RepositoryRuleset#name}

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.negate"></a>

```go
Negate interface{}
```

- *Type:* interface{}

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryRulesetBypassActorsList <a name="RepositoryRulesetBypassActorsList" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRulesetBypassActorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RepositoryRulesetBypassActorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.get"></a>

```go
func Get(index *f64) RepositoryRulesetBypassActorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RepositoryRulesetBypassActorsOutputReference <a name="RepositoryRulesetBypassActorsOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRulesetBypassActorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RepositoryRulesetBypassActorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.resetActorId">ResetActorId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActorId` <a name="ResetActorId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.resetActorId"></a>

```go
func ResetActorId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorIdInput">ActorIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorTypeInput">ActorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.bypassModeInput">BypassModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorId">ActorId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorType">ActorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.bypassMode">BypassMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActorIdInput`<sup>Optional</sup> <a name="ActorIdInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorIdInput"></a>

```go
func ActorIdInput() *f64
```

- *Type:* *f64

---

##### `ActorTypeInput`<sup>Optional</sup> <a name="ActorTypeInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorTypeInput"></a>

```go
func ActorTypeInput() *string
```

- *Type:* *string

---

##### `BypassModeInput`<sup>Optional</sup> <a name="BypassModeInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.bypassModeInput"></a>

```go
func BypassModeInput() *string
```

- *Type:* *string

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorId"></a>

```go
func ActorId() *f64
```

- *Type:* *f64

---

##### `ActorType`<sup>Required</sup> <a name="ActorType" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorType"></a>

```go
func ActorType() *string
```

- *Type:* *string

---

##### `BypassMode`<sup>Required</sup> <a name="BypassMode" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.bypassMode"></a>

```go
func BypassMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RepositoryRulesetConditionsOutputReference <a name="RepositoryRulesetConditionsOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRulesetConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositoryRulesetConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.putRefName">PutRefName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRefName` <a name="PutRefName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.putRefName"></a>

```go
func PutRefName(value RepositoryRulesetConditionsRefName)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.putRefName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName">RepositoryRulesetConditionsRefName</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.refName">RefName</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference">RepositoryRulesetConditionsRefNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.refNameInput">RefNameInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName">RepositoryRulesetConditionsRefName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions">RepositoryRulesetConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RefName`<sup>Required</sup> <a name="RefName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.refName"></a>

```go
func RefName() RepositoryRulesetConditionsRefNameOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference">RepositoryRulesetConditionsRefNameOutputReference</a>

---

##### `RefNameInput`<sup>Optional</sup> <a name="RefNameInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.refNameInput"></a>

```go
func RefNameInput() RepositoryRulesetConditionsRefName
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName">RepositoryRulesetConditionsRefName</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositoryRulesetConditions
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions">RepositoryRulesetConditions</a>

---


### RepositoryRulesetConditionsRefNameOutputReference <a name="RepositoryRulesetConditionsRefNameOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRulesetConditionsRefNameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositoryRulesetConditionsRefNameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.includeInput">IncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.exclude">Exclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName">RepositoryRulesetConditionsRefName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.excludeInput"></a>

```go
func ExcludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.includeInput"></a>

```go
func IncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.exclude"></a>

```go
func Exclude() *[]*string
```

- *Type:* *[]*string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositoryRulesetConditionsRefName
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName">RepositoryRulesetConditionsRefName</a>

---


### RepositoryRulesetRulesBranchNamePatternOutputReference <a name="RepositoryRulesetRulesBranchNamePatternOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRulesetRulesBranchNamePatternOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositoryRulesetRulesBranchNamePatternOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.resetNegate"></a>

```go
func ResetNegate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.negateInput">NegateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.negate">Negate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern">RepositoryRulesetRulesBranchNamePattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.negateInput"></a>

```go
func NegateInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.negate"></a>

```go
func Negate() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositoryRulesetRulesBranchNamePattern
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern">RepositoryRulesetRulesBranchNamePattern</a>

---


### RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference <a name="RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRulesetRulesCommitAuthorEmailPatternOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.resetNegate"></a>

```go
func ResetNegate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.negateInput">NegateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.negate">Negate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern">RepositoryRulesetRulesCommitAuthorEmailPattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.negateInput"></a>

```go
func NegateInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.negate"></a>

```go
func Negate() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositoryRulesetRulesCommitAuthorEmailPattern
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern">RepositoryRulesetRulesCommitAuthorEmailPattern</a>

---


### RepositoryRulesetRulesCommitMessagePatternOutputReference <a name="RepositoryRulesetRulesCommitMessagePatternOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRulesetRulesCommitMessagePatternOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositoryRulesetRulesCommitMessagePatternOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.resetNegate"></a>

```go
func ResetNegate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.negateInput">NegateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.negate">Negate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern">RepositoryRulesetRulesCommitMessagePattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.negateInput"></a>

```go
func NegateInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.negate"></a>

```go
func Negate() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositoryRulesetRulesCommitMessagePattern
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern">RepositoryRulesetRulesCommitMessagePattern</a>

---


### RepositoryRulesetRulesCommitterEmailPatternOutputReference <a name="RepositoryRulesetRulesCommitterEmailPatternOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRulesetRulesCommitterEmailPatternOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositoryRulesetRulesCommitterEmailPatternOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.resetNegate"></a>

```go
func ResetNegate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.negateInput">NegateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.negate">Negate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern">RepositoryRulesetRulesCommitterEmailPattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.negateInput"></a>

```go
func NegateInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.negate"></a>

```go
func Negate() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositoryRulesetRulesCommitterEmailPattern
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern">RepositoryRulesetRulesCommitterEmailPattern</a>

---


### RepositoryRulesetRulesFileExtensionRestrictionOutputReference <a name="RepositoryRulesetRulesFileExtensionRestrictionOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRulesetRulesFileExtensionRestrictionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositoryRulesetRulesFileExtensionRestrictionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.property.restrictedFileExtensionsInput">RestrictedFileExtensionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.property.restrictedFileExtensions">RestrictedFileExtensions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestriction">RepositoryRulesetRulesFileExtensionRestriction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RestrictedFileExtensionsInput`<sup>Optional</sup> <a name="RestrictedFileExtensionsInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.property.restrictedFileExtensionsInput"></a>

```go
func RestrictedFileExtensionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RestrictedFileExtensions`<sup>Required</sup> <a name="RestrictedFileExtensions" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.property.restrictedFileExtensions"></a>

```go
func RestrictedFileExtensions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositoryRulesetRulesFileExtensionRestriction
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestriction">RepositoryRulesetRulesFileExtensionRestriction</a>

---


### RepositoryRulesetRulesFilePathRestrictionOutputReference <a name="RepositoryRulesetRulesFilePathRestrictionOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRulesetRulesFilePathRestrictionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositoryRulesetRulesFilePathRestrictionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.property.restrictedFilePathsInput">RestrictedFilePathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.property.restrictedFilePaths">RestrictedFilePaths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestriction">RepositoryRulesetRulesFilePathRestriction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RestrictedFilePathsInput`<sup>Optional</sup> <a name="RestrictedFilePathsInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.property.restrictedFilePathsInput"></a>

```go
func RestrictedFilePathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RestrictedFilePaths`<sup>Required</sup> <a name="RestrictedFilePaths" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.property.restrictedFilePaths"></a>

```go
func RestrictedFilePaths() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositoryRulesetRulesFilePathRestriction
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestriction">RepositoryRulesetRulesFilePathRestriction</a>

---


### RepositoryRulesetRulesMaxFileSizeOutputReference <a name="RepositoryRulesetRulesMaxFileSizeOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRulesetRulesMaxFileSizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositoryRulesetRulesMaxFileSizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSize">RepositoryRulesetRulesMaxFileSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.property.maxFileSizeInput"></a>

```go
func MaxFileSizeInput() *f64
```

- *Type:* *f64

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.property.maxFileSize"></a>

```go
func MaxFileSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositoryRulesetRulesMaxFileSize
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSize">RepositoryRulesetRulesMaxFileSize</a>

---


### RepositoryRulesetRulesMergeQueueOutputReference <a name="RepositoryRulesetRulesMergeQueueOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRulesetRulesMergeQueueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositoryRulesetRulesMergeQueueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.resetCheckResponseTimeoutMinutes">ResetCheckResponseTimeoutMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.resetGroupingStrategy">ResetGroupingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.resetMaxEntriesToBuild">ResetMaxEntriesToBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.resetMaxEntriesToMerge">ResetMaxEntriesToMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.resetMergeMethod">ResetMergeMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.resetMinEntriesToMerge">ResetMinEntriesToMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.resetMinEntriesToMergeWaitMinutes">ResetMinEntriesToMergeWaitMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCheckResponseTimeoutMinutes` <a name="ResetCheckResponseTimeoutMinutes" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.resetCheckResponseTimeoutMinutes"></a>

```go
func ResetCheckResponseTimeoutMinutes()
```

##### `ResetGroupingStrategy` <a name="ResetGroupingStrategy" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.resetGroupingStrategy"></a>

```go
func ResetGroupingStrategy()
```

##### `ResetMaxEntriesToBuild` <a name="ResetMaxEntriesToBuild" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.resetMaxEntriesToBuild"></a>

```go
func ResetMaxEntriesToBuild()
```

##### `ResetMaxEntriesToMerge` <a name="ResetMaxEntriesToMerge" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.resetMaxEntriesToMerge"></a>

```go
func ResetMaxEntriesToMerge()
```

##### `ResetMergeMethod` <a name="ResetMergeMethod" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.resetMergeMethod"></a>

```go
func ResetMergeMethod()
```

##### `ResetMinEntriesToMerge` <a name="ResetMinEntriesToMerge" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.resetMinEntriesToMerge"></a>

```go
func ResetMinEntriesToMerge()
```

##### `ResetMinEntriesToMergeWaitMinutes` <a name="ResetMinEntriesToMergeWaitMinutes" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.resetMinEntriesToMergeWaitMinutes"></a>

```go
func ResetMinEntriesToMergeWaitMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.checkResponseTimeoutMinutesInput">CheckResponseTimeoutMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.groupingStrategyInput">GroupingStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.maxEntriesToBuildInput">MaxEntriesToBuildInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.maxEntriesToMergeInput">MaxEntriesToMergeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.mergeMethodInput">MergeMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.minEntriesToMergeInput">MinEntriesToMergeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.minEntriesToMergeWaitMinutesInput">MinEntriesToMergeWaitMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.checkResponseTimeoutMinutes">CheckResponseTimeoutMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.groupingStrategy">GroupingStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.maxEntriesToBuild">MaxEntriesToBuild</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.maxEntriesToMerge">MaxEntriesToMerge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.mergeMethod">MergeMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.minEntriesToMerge">MinEntriesToMerge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.minEntriesToMergeWaitMinutes">MinEntriesToMergeWaitMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue">RepositoryRulesetRulesMergeQueue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CheckResponseTimeoutMinutesInput`<sup>Optional</sup> <a name="CheckResponseTimeoutMinutesInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.checkResponseTimeoutMinutesInput"></a>

```go
func CheckResponseTimeoutMinutesInput() *f64
```

- *Type:* *f64

---

##### `GroupingStrategyInput`<sup>Optional</sup> <a name="GroupingStrategyInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.groupingStrategyInput"></a>

```go
func GroupingStrategyInput() *string
```

- *Type:* *string

---

##### `MaxEntriesToBuildInput`<sup>Optional</sup> <a name="MaxEntriesToBuildInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.maxEntriesToBuildInput"></a>

```go
func MaxEntriesToBuildInput() *f64
```

- *Type:* *f64

---

##### `MaxEntriesToMergeInput`<sup>Optional</sup> <a name="MaxEntriesToMergeInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.maxEntriesToMergeInput"></a>

```go
func MaxEntriesToMergeInput() *f64
```

- *Type:* *f64

---

##### `MergeMethodInput`<sup>Optional</sup> <a name="MergeMethodInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.mergeMethodInput"></a>

```go
func MergeMethodInput() *string
```

- *Type:* *string

---

##### `MinEntriesToMergeInput`<sup>Optional</sup> <a name="MinEntriesToMergeInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.minEntriesToMergeInput"></a>

```go
func MinEntriesToMergeInput() *f64
```

- *Type:* *f64

---

##### `MinEntriesToMergeWaitMinutesInput`<sup>Optional</sup> <a name="MinEntriesToMergeWaitMinutesInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.minEntriesToMergeWaitMinutesInput"></a>

```go
func MinEntriesToMergeWaitMinutesInput() *f64
```

- *Type:* *f64

---

##### `CheckResponseTimeoutMinutes`<sup>Required</sup> <a name="CheckResponseTimeoutMinutes" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.checkResponseTimeoutMinutes"></a>

```go
func CheckResponseTimeoutMinutes() *f64
```

- *Type:* *f64

---

##### `GroupingStrategy`<sup>Required</sup> <a name="GroupingStrategy" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.groupingStrategy"></a>

```go
func GroupingStrategy() *string
```

- *Type:* *string

---

##### `MaxEntriesToBuild`<sup>Required</sup> <a name="MaxEntriesToBuild" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.maxEntriesToBuild"></a>

```go
func MaxEntriesToBuild() *f64
```

- *Type:* *f64

---

##### `MaxEntriesToMerge`<sup>Required</sup> <a name="MaxEntriesToMerge" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.maxEntriesToMerge"></a>

```go
func MaxEntriesToMerge() *f64
```

- *Type:* *f64

---

##### `MergeMethod`<sup>Required</sup> <a name="MergeMethod" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.mergeMethod"></a>

```go
func MergeMethod() *string
```

- *Type:* *string

---

##### `MinEntriesToMerge`<sup>Required</sup> <a name="MinEntriesToMerge" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.minEntriesToMerge"></a>

```go
func MinEntriesToMerge() *f64
```

- *Type:* *f64

---

##### `MinEntriesToMergeWaitMinutes`<sup>Required</sup> <a name="MinEntriesToMergeWaitMinutes" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.minEntriesToMergeWaitMinutes"></a>

```go
func MinEntriesToMergeWaitMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositoryRulesetRulesMergeQueue
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue">RepositoryRulesetRulesMergeQueue</a>

---


### RepositoryRulesetRulesOutputReference <a name="RepositoryRulesetRulesOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRulesetRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositoryRulesetRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putBranchNamePattern">PutBranchNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitAuthorEmailPattern">PutCommitAuthorEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitMessagePattern">PutCommitMessagePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitterEmailPattern">PutCommitterEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putFileExtensionRestriction">PutFileExtensionRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putFilePathRestriction">PutFilePathRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putMaxFileSize">PutMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putMergeQueue">PutMergeQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putPullRequest">PutPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putRequiredCodeScanning">PutRequiredCodeScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putRequiredDeployments">PutRequiredDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putRequiredStatusChecks">PutRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putTagNamePattern">PutTagNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetBranchNamePattern">ResetBranchNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCommitAuthorEmailPattern">ResetCommitAuthorEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCommitMessagePattern">ResetCommitMessagePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCommitterEmailPattern">ResetCommitterEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCreation">ResetCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetDeletion">ResetDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetFileExtensionRestriction">ResetFileExtensionRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetFilePathRestriction">ResetFilePathRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetMaxFileSize">ResetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetMergeQueue">ResetMergeQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetNonFastForward">ResetNonFastForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetPullRequest">ResetPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredCodeScanning">ResetRequiredCodeScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredDeployments">ResetRequiredDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredLinearHistory">ResetRequiredLinearHistory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredSignatures">ResetRequiredSignatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredStatusChecks">ResetRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetTagNamePattern">ResetTagNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetUpdateAllowsFetchAndMerge">ResetUpdateAllowsFetchAndMerge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBranchNamePattern` <a name="PutBranchNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putBranchNamePattern"></a>

```go
func PutBranchNamePattern(value RepositoryRulesetRulesBranchNamePattern)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putBranchNamePattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern">RepositoryRulesetRulesBranchNamePattern</a>

---

##### `PutCommitAuthorEmailPattern` <a name="PutCommitAuthorEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitAuthorEmailPattern"></a>

```go
func PutCommitAuthorEmailPattern(value RepositoryRulesetRulesCommitAuthorEmailPattern)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitAuthorEmailPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern">RepositoryRulesetRulesCommitAuthorEmailPattern</a>

---

##### `PutCommitMessagePattern` <a name="PutCommitMessagePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitMessagePattern"></a>

```go
func PutCommitMessagePattern(value RepositoryRulesetRulesCommitMessagePattern)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitMessagePattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern">RepositoryRulesetRulesCommitMessagePattern</a>

---

##### `PutCommitterEmailPattern` <a name="PutCommitterEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitterEmailPattern"></a>

```go
func PutCommitterEmailPattern(value RepositoryRulesetRulesCommitterEmailPattern)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitterEmailPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern">RepositoryRulesetRulesCommitterEmailPattern</a>

---

##### `PutFileExtensionRestriction` <a name="PutFileExtensionRestriction" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putFileExtensionRestriction"></a>

```go
func PutFileExtensionRestriction(value RepositoryRulesetRulesFileExtensionRestriction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putFileExtensionRestriction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestriction">RepositoryRulesetRulesFileExtensionRestriction</a>

---

##### `PutFilePathRestriction` <a name="PutFilePathRestriction" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putFilePathRestriction"></a>

```go
func PutFilePathRestriction(value RepositoryRulesetRulesFilePathRestriction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putFilePathRestriction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestriction">RepositoryRulesetRulesFilePathRestriction</a>

---

##### `PutMaxFileSize` <a name="PutMaxFileSize" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putMaxFileSize"></a>

```go
func PutMaxFileSize(value RepositoryRulesetRulesMaxFileSize)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putMaxFileSize.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSize">RepositoryRulesetRulesMaxFileSize</a>

---

##### `PutMergeQueue` <a name="PutMergeQueue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putMergeQueue"></a>

```go
func PutMergeQueue(value RepositoryRulesetRulesMergeQueue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putMergeQueue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue">RepositoryRulesetRulesMergeQueue</a>

---

##### `PutPullRequest` <a name="PutPullRequest" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putPullRequest"></a>

```go
func PutPullRequest(value RepositoryRulesetRulesPullRequest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putPullRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest">RepositoryRulesetRulesPullRequest</a>

---

##### `PutRequiredCodeScanning` <a name="PutRequiredCodeScanning" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putRequiredCodeScanning"></a>

```go
func PutRequiredCodeScanning(value RepositoryRulesetRulesRequiredCodeScanning)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putRequiredCodeScanning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanning">RepositoryRulesetRulesRequiredCodeScanning</a>

---

##### `PutRequiredDeployments` <a name="PutRequiredDeployments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putRequiredDeployments"></a>

```go
func PutRequiredDeployments(value RepositoryRulesetRulesRequiredDeployments)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putRequiredDeployments.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments">RepositoryRulesetRulesRequiredDeployments</a>

---

##### `PutRequiredStatusChecks` <a name="PutRequiredStatusChecks" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putRequiredStatusChecks"></a>

```go
func PutRequiredStatusChecks(value RepositoryRulesetRulesRequiredStatusChecks)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putRequiredStatusChecks.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks">RepositoryRulesetRulesRequiredStatusChecks</a>

---

##### `PutTagNamePattern` <a name="PutTagNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putTagNamePattern"></a>

```go
func PutTagNamePattern(value RepositoryRulesetRulesTagNamePattern)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putTagNamePattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern">RepositoryRulesetRulesTagNamePattern</a>

---

##### `ResetBranchNamePattern` <a name="ResetBranchNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetBranchNamePattern"></a>

```go
func ResetBranchNamePattern()
```

##### `ResetCommitAuthorEmailPattern` <a name="ResetCommitAuthorEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCommitAuthorEmailPattern"></a>

```go
func ResetCommitAuthorEmailPattern()
```

##### `ResetCommitMessagePattern` <a name="ResetCommitMessagePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCommitMessagePattern"></a>

```go
func ResetCommitMessagePattern()
```

##### `ResetCommitterEmailPattern` <a name="ResetCommitterEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCommitterEmailPattern"></a>

```go
func ResetCommitterEmailPattern()
```

##### `ResetCreation` <a name="ResetCreation" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCreation"></a>

```go
func ResetCreation()
```

##### `ResetDeletion` <a name="ResetDeletion" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetDeletion"></a>

```go
func ResetDeletion()
```

##### `ResetFileExtensionRestriction` <a name="ResetFileExtensionRestriction" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetFileExtensionRestriction"></a>

```go
func ResetFileExtensionRestriction()
```

##### `ResetFilePathRestriction` <a name="ResetFilePathRestriction" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetFilePathRestriction"></a>

```go
func ResetFilePathRestriction()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetMaxFileSize"></a>

```go
func ResetMaxFileSize()
```

##### `ResetMergeQueue` <a name="ResetMergeQueue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetMergeQueue"></a>

```go
func ResetMergeQueue()
```

##### `ResetNonFastForward` <a name="ResetNonFastForward" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetNonFastForward"></a>

```go
func ResetNonFastForward()
```

##### `ResetPullRequest` <a name="ResetPullRequest" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetPullRequest"></a>

```go
func ResetPullRequest()
```

##### `ResetRequiredCodeScanning` <a name="ResetRequiredCodeScanning" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredCodeScanning"></a>

```go
func ResetRequiredCodeScanning()
```

##### `ResetRequiredDeployments` <a name="ResetRequiredDeployments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredDeployments"></a>

```go
func ResetRequiredDeployments()
```

##### `ResetRequiredLinearHistory` <a name="ResetRequiredLinearHistory" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredLinearHistory"></a>

```go
func ResetRequiredLinearHistory()
```

##### `ResetRequiredSignatures` <a name="ResetRequiredSignatures" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredSignatures"></a>

```go
func ResetRequiredSignatures()
```

##### `ResetRequiredStatusChecks` <a name="ResetRequiredStatusChecks" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredStatusChecks"></a>

```go
func ResetRequiredStatusChecks()
```

##### `ResetTagNamePattern` <a name="ResetTagNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetTagNamePattern"></a>

```go
func ResetTagNamePattern()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```

##### `ResetUpdateAllowsFetchAndMerge` <a name="ResetUpdateAllowsFetchAndMerge" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetUpdateAllowsFetchAndMerge"></a>

```go
func ResetUpdateAllowsFetchAndMerge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.branchNamePattern">BranchNamePattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference">RepositoryRulesetRulesBranchNamePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitAuthorEmailPattern">CommitAuthorEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference">RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitMessagePattern">CommitMessagePattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference">RepositoryRulesetRulesCommitMessagePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.committerEmailPattern">CommitterEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference">RepositoryRulesetRulesCommitterEmailPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.fileExtensionRestriction">FileExtensionRestriction</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference">RepositoryRulesetRulesFileExtensionRestrictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.filePathRestriction">FilePathRestriction</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference">RepositoryRulesetRulesFilePathRestrictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference">RepositoryRulesetRulesMaxFileSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.mergeQueue">MergeQueue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference">RepositoryRulesetRulesMergeQueueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference">RepositoryRulesetRulesPullRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredCodeScanning">RequiredCodeScanning</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference">RepositoryRulesetRulesRequiredCodeScanningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredDeployments">RequiredDeployments</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference">RepositoryRulesetRulesRequiredDeploymentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredStatusChecks">RequiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference">RepositoryRulesetRulesRequiredStatusChecksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.tagNamePattern">TagNamePattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference">RepositoryRulesetRulesTagNamePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.branchNamePatternInput">BranchNamePatternInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern">RepositoryRulesetRulesBranchNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitAuthorEmailPatternInput">CommitAuthorEmailPatternInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern">RepositoryRulesetRulesCommitAuthorEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitMessagePatternInput">CommitMessagePatternInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern">RepositoryRulesetRulesCommitMessagePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.committerEmailPatternInput">CommitterEmailPatternInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern">RepositoryRulesetRulesCommitterEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.creationInput">CreationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.deletionInput">DeletionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.fileExtensionRestrictionInput">FileExtensionRestrictionInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestriction">RepositoryRulesetRulesFileExtensionRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.filePathRestrictionInput">FilePathRestrictionInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestriction">RepositoryRulesetRulesFilePathRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSize">RepositoryRulesetRulesMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.mergeQueueInput">MergeQueueInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue">RepositoryRulesetRulesMergeQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.nonFastForwardInput">NonFastForwardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.pullRequestInput">PullRequestInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest">RepositoryRulesetRulesPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredCodeScanningInput">RequiredCodeScanningInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanning">RepositoryRulesetRulesRequiredCodeScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredDeploymentsInput">RequiredDeploymentsInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments">RepositoryRulesetRulesRequiredDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredLinearHistoryInput">RequiredLinearHistoryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredSignaturesInput">RequiredSignaturesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredStatusChecksInput">RequiredStatusChecksInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks">RepositoryRulesetRulesRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.tagNamePatternInput">TagNamePatternInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern">RepositoryRulesetRulesTagNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.updateAllowsFetchAndMergeInput">UpdateAllowsFetchAndMergeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.updateInput">UpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.creation">Creation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.deletion">Deletion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.nonFastForward">NonFastForward</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredLinearHistory">RequiredLinearHistory</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredSignatures">RequiredSignatures</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.update">Update</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.updateAllowsFetchAndMerge">UpdateAllowsFetchAndMerge</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules">RepositoryRulesetRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchNamePattern`<sup>Required</sup> <a name="BranchNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.branchNamePattern"></a>

```go
func BranchNamePattern() RepositoryRulesetRulesBranchNamePatternOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference">RepositoryRulesetRulesBranchNamePatternOutputReference</a>

---

##### `CommitAuthorEmailPattern`<sup>Required</sup> <a name="CommitAuthorEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitAuthorEmailPattern"></a>

```go
func CommitAuthorEmailPattern() RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference">RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference</a>

---

##### `CommitMessagePattern`<sup>Required</sup> <a name="CommitMessagePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitMessagePattern"></a>

```go
func CommitMessagePattern() RepositoryRulesetRulesCommitMessagePatternOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference">RepositoryRulesetRulesCommitMessagePatternOutputReference</a>

---

##### `CommitterEmailPattern`<sup>Required</sup> <a name="CommitterEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.committerEmailPattern"></a>

```go
func CommitterEmailPattern() RepositoryRulesetRulesCommitterEmailPatternOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference">RepositoryRulesetRulesCommitterEmailPatternOutputReference</a>

---

##### `FileExtensionRestriction`<sup>Required</sup> <a name="FileExtensionRestriction" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.fileExtensionRestriction"></a>

```go
func FileExtensionRestriction() RepositoryRulesetRulesFileExtensionRestrictionOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestrictionOutputReference">RepositoryRulesetRulesFileExtensionRestrictionOutputReference</a>

---

##### `FilePathRestriction`<sup>Required</sup> <a name="FilePathRestriction" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.filePathRestriction"></a>

```go
func FilePathRestriction() RepositoryRulesetRulesFilePathRestrictionOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestrictionOutputReference">RepositoryRulesetRulesFilePathRestrictionOutputReference</a>

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.maxFileSize"></a>

```go
func MaxFileSize() RepositoryRulesetRulesMaxFileSizeOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSizeOutputReference">RepositoryRulesetRulesMaxFileSizeOutputReference</a>

---

##### `MergeQueue`<sup>Required</sup> <a name="MergeQueue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.mergeQueue"></a>

```go
func MergeQueue() RepositoryRulesetRulesMergeQueueOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueueOutputReference">RepositoryRulesetRulesMergeQueueOutputReference</a>

---

##### `PullRequest`<sup>Required</sup> <a name="PullRequest" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.pullRequest"></a>

```go
func PullRequest() RepositoryRulesetRulesPullRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference">RepositoryRulesetRulesPullRequestOutputReference</a>

---

##### `RequiredCodeScanning`<sup>Required</sup> <a name="RequiredCodeScanning" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredCodeScanning"></a>

```go
func RequiredCodeScanning() RepositoryRulesetRulesRequiredCodeScanningOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference">RepositoryRulesetRulesRequiredCodeScanningOutputReference</a>

---

##### `RequiredDeployments`<sup>Required</sup> <a name="RequiredDeployments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredDeployments"></a>

```go
func RequiredDeployments() RepositoryRulesetRulesRequiredDeploymentsOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference">RepositoryRulesetRulesRequiredDeploymentsOutputReference</a>

---

##### `RequiredStatusChecks`<sup>Required</sup> <a name="RequiredStatusChecks" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredStatusChecks"></a>

```go
func RequiredStatusChecks() RepositoryRulesetRulesRequiredStatusChecksOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference">RepositoryRulesetRulesRequiredStatusChecksOutputReference</a>

---

##### `TagNamePattern`<sup>Required</sup> <a name="TagNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.tagNamePattern"></a>

```go
func TagNamePattern() RepositoryRulesetRulesTagNamePatternOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference">RepositoryRulesetRulesTagNamePatternOutputReference</a>

---

##### `BranchNamePatternInput`<sup>Optional</sup> <a name="BranchNamePatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.branchNamePatternInput"></a>

```go
func BranchNamePatternInput() RepositoryRulesetRulesBranchNamePattern
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern">RepositoryRulesetRulesBranchNamePattern</a>

---

##### `CommitAuthorEmailPatternInput`<sup>Optional</sup> <a name="CommitAuthorEmailPatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitAuthorEmailPatternInput"></a>

```go
func CommitAuthorEmailPatternInput() RepositoryRulesetRulesCommitAuthorEmailPattern
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern">RepositoryRulesetRulesCommitAuthorEmailPattern</a>

---

##### `CommitMessagePatternInput`<sup>Optional</sup> <a name="CommitMessagePatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitMessagePatternInput"></a>

```go
func CommitMessagePatternInput() RepositoryRulesetRulesCommitMessagePattern
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern">RepositoryRulesetRulesCommitMessagePattern</a>

---

##### `CommitterEmailPatternInput`<sup>Optional</sup> <a name="CommitterEmailPatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.committerEmailPatternInput"></a>

```go
func CommitterEmailPatternInput() RepositoryRulesetRulesCommitterEmailPattern
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern">RepositoryRulesetRulesCommitterEmailPattern</a>

---

##### `CreationInput`<sup>Optional</sup> <a name="CreationInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.creationInput"></a>

```go
func CreationInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionInput`<sup>Optional</sup> <a name="DeletionInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.deletionInput"></a>

```go
func DeletionInput() interface{}
```

- *Type:* interface{}

---

##### `FileExtensionRestrictionInput`<sup>Optional</sup> <a name="FileExtensionRestrictionInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.fileExtensionRestrictionInput"></a>

```go
func FileExtensionRestrictionInput() RepositoryRulesetRulesFileExtensionRestriction
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFileExtensionRestriction">RepositoryRulesetRulesFileExtensionRestriction</a>

---

##### `FilePathRestrictionInput`<sup>Optional</sup> <a name="FilePathRestrictionInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.filePathRestrictionInput"></a>

```go
func FilePathRestrictionInput() RepositoryRulesetRulesFilePathRestriction
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesFilePathRestriction">RepositoryRulesetRulesFilePathRestriction</a>

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.maxFileSizeInput"></a>

```go
func MaxFileSizeInput() RepositoryRulesetRulesMaxFileSize
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMaxFileSize">RepositoryRulesetRulesMaxFileSize</a>

---

##### `MergeQueueInput`<sup>Optional</sup> <a name="MergeQueueInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.mergeQueueInput"></a>

```go
func MergeQueueInput() RepositoryRulesetRulesMergeQueue
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesMergeQueue">RepositoryRulesetRulesMergeQueue</a>

---

##### `NonFastForwardInput`<sup>Optional</sup> <a name="NonFastForwardInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.nonFastForwardInput"></a>

```go
func NonFastForwardInput() interface{}
```

- *Type:* interface{}

---

##### `PullRequestInput`<sup>Optional</sup> <a name="PullRequestInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.pullRequestInput"></a>

```go
func PullRequestInput() RepositoryRulesetRulesPullRequest
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest">RepositoryRulesetRulesPullRequest</a>

---

##### `RequiredCodeScanningInput`<sup>Optional</sup> <a name="RequiredCodeScanningInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredCodeScanningInput"></a>

```go
func RequiredCodeScanningInput() RepositoryRulesetRulesRequiredCodeScanning
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanning">RepositoryRulesetRulesRequiredCodeScanning</a>

---

##### `RequiredDeploymentsInput`<sup>Optional</sup> <a name="RequiredDeploymentsInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredDeploymentsInput"></a>

```go
func RequiredDeploymentsInput() RepositoryRulesetRulesRequiredDeployments
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments">RepositoryRulesetRulesRequiredDeployments</a>

---

##### `RequiredLinearHistoryInput`<sup>Optional</sup> <a name="RequiredLinearHistoryInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredLinearHistoryInput"></a>

```go
func RequiredLinearHistoryInput() interface{}
```

- *Type:* interface{}

---

##### `RequiredSignaturesInput`<sup>Optional</sup> <a name="RequiredSignaturesInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredSignaturesInput"></a>

```go
func RequiredSignaturesInput() interface{}
```

- *Type:* interface{}

---

##### `RequiredStatusChecksInput`<sup>Optional</sup> <a name="RequiredStatusChecksInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredStatusChecksInput"></a>

```go
func RequiredStatusChecksInput() RepositoryRulesetRulesRequiredStatusChecks
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks">RepositoryRulesetRulesRequiredStatusChecks</a>

---

##### `TagNamePatternInput`<sup>Optional</sup> <a name="TagNamePatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.tagNamePatternInput"></a>

```go
func TagNamePatternInput() RepositoryRulesetRulesTagNamePattern
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern">RepositoryRulesetRulesTagNamePattern</a>

---

##### `UpdateAllowsFetchAndMergeInput`<sup>Optional</sup> <a name="UpdateAllowsFetchAndMergeInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.updateAllowsFetchAndMergeInput"></a>

```go
func UpdateAllowsFetchAndMergeInput() interface{}
```

- *Type:* interface{}

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.updateInput"></a>

```go
func UpdateInput() interface{}
```

- *Type:* interface{}

---

##### `Creation`<sup>Required</sup> <a name="Creation" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.creation"></a>

```go
func Creation() interface{}
```

- *Type:* interface{}

---

##### `Deletion`<sup>Required</sup> <a name="Deletion" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.deletion"></a>

```go
func Deletion() interface{}
```

- *Type:* interface{}

---

##### `NonFastForward`<sup>Required</sup> <a name="NonFastForward" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.nonFastForward"></a>

```go
func NonFastForward() interface{}
```

- *Type:* interface{}

---

##### `RequiredLinearHistory`<sup>Required</sup> <a name="RequiredLinearHistory" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredLinearHistory"></a>

```go
func RequiredLinearHistory() interface{}
```

- *Type:* interface{}

---

##### `RequiredSignatures`<sup>Required</sup> <a name="RequiredSignatures" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredSignatures"></a>

```go
func RequiredSignatures() interface{}
```

- *Type:* interface{}

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.update"></a>

```go
func Update() interface{}
```

- *Type:* interface{}

---

##### `UpdateAllowsFetchAndMerge`<sup>Required</sup> <a name="UpdateAllowsFetchAndMerge" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.updateAllowsFetchAndMerge"></a>

```go
func UpdateAllowsFetchAndMerge() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositoryRulesetRules
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules">RepositoryRulesetRules</a>

---


### RepositoryRulesetRulesPullRequestOutputReference <a name="RepositoryRulesetRulesPullRequestOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRulesetRulesPullRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositoryRulesetRulesPullRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetDismissStaleReviewsOnPush">ResetDismissStaleReviewsOnPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequireCodeOwnerReview">ResetRequireCodeOwnerReview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequiredApprovingReviewCount">ResetRequiredApprovingReviewCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequiredReviewThreadResolution">ResetRequiredReviewThreadResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequireLastPushApproval">ResetRequireLastPushApproval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDismissStaleReviewsOnPush` <a name="ResetDismissStaleReviewsOnPush" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetDismissStaleReviewsOnPush"></a>

```go
func ResetDismissStaleReviewsOnPush()
```

##### `ResetRequireCodeOwnerReview` <a name="ResetRequireCodeOwnerReview" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequireCodeOwnerReview"></a>

```go
func ResetRequireCodeOwnerReview()
```

##### `ResetRequiredApprovingReviewCount` <a name="ResetRequiredApprovingReviewCount" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequiredApprovingReviewCount"></a>

```go
func ResetRequiredApprovingReviewCount()
```

##### `ResetRequiredReviewThreadResolution` <a name="ResetRequiredReviewThreadResolution" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequiredReviewThreadResolution"></a>

```go
func ResetRequiredReviewThreadResolution()
```

##### `ResetRequireLastPushApproval` <a name="ResetRequireLastPushApproval" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequireLastPushApproval"></a>

```go
func ResetRequireLastPushApproval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPushInput">DismissStaleReviewsOnPushInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReviewInput">RequireCodeOwnerReviewInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCountInput">RequiredApprovingReviewCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolutionInput">RequiredReviewThreadResolutionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireLastPushApprovalInput">RequireLastPushApprovalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPush">DismissStaleReviewsOnPush</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReview">RequireCodeOwnerReview</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCount">RequiredApprovingReviewCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolution">RequiredReviewThreadResolution</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireLastPushApproval">RequireLastPushApproval</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest">RepositoryRulesetRulesPullRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DismissStaleReviewsOnPushInput`<sup>Optional</sup> <a name="DismissStaleReviewsOnPushInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPushInput"></a>

```go
func DismissStaleReviewsOnPushInput() interface{}
```

- *Type:* interface{}

---

##### `RequireCodeOwnerReviewInput`<sup>Optional</sup> <a name="RequireCodeOwnerReviewInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReviewInput"></a>

```go
func RequireCodeOwnerReviewInput() interface{}
```

- *Type:* interface{}

---

##### `RequiredApprovingReviewCountInput`<sup>Optional</sup> <a name="RequiredApprovingReviewCountInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCountInput"></a>

```go
func RequiredApprovingReviewCountInput() *f64
```

- *Type:* *f64

---

##### `RequiredReviewThreadResolutionInput`<sup>Optional</sup> <a name="RequiredReviewThreadResolutionInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolutionInput"></a>

```go
func RequiredReviewThreadResolutionInput() interface{}
```

- *Type:* interface{}

---

##### `RequireLastPushApprovalInput`<sup>Optional</sup> <a name="RequireLastPushApprovalInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireLastPushApprovalInput"></a>

```go
func RequireLastPushApprovalInput() interface{}
```

- *Type:* interface{}

---

##### `DismissStaleReviewsOnPush`<sup>Required</sup> <a name="DismissStaleReviewsOnPush" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPush"></a>

```go
func DismissStaleReviewsOnPush() interface{}
```

- *Type:* interface{}

---

##### `RequireCodeOwnerReview`<sup>Required</sup> <a name="RequireCodeOwnerReview" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReview"></a>

```go
func RequireCodeOwnerReview() interface{}
```

- *Type:* interface{}

---

##### `RequiredApprovingReviewCount`<sup>Required</sup> <a name="RequiredApprovingReviewCount" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCount"></a>

```go
func RequiredApprovingReviewCount() *f64
```

- *Type:* *f64

---

##### `RequiredReviewThreadResolution`<sup>Required</sup> <a name="RequiredReviewThreadResolution" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolution"></a>

```go
func RequiredReviewThreadResolution() interface{}
```

- *Type:* interface{}

---

##### `RequireLastPushApproval`<sup>Required</sup> <a name="RequireLastPushApproval" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireLastPushApproval"></a>

```go
func RequireLastPushApproval() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositoryRulesetRulesPullRequest
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest">RepositoryRulesetRulesPullRequest</a>

---


### RepositoryRulesetRulesRequiredCodeScanningOutputReference <a name="RepositoryRulesetRulesRequiredCodeScanningOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRulesetRulesRequiredCodeScanningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositoryRulesetRulesRequiredCodeScanningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.putRequiredCodeScanningTool">PutRequiredCodeScanningTool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequiredCodeScanningTool` <a name="PutRequiredCodeScanningTool" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.putRequiredCodeScanningTool"></a>

```go
func PutRequiredCodeScanningTool(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.putRequiredCodeScanningTool.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.property.requiredCodeScanningTool">RequiredCodeScanningTool</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList">RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.property.requiredCodeScanningToolInput">RequiredCodeScanningToolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanning">RepositoryRulesetRulesRequiredCodeScanning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequiredCodeScanningTool`<sup>Required</sup> <a name="RequiredCodeScanningTool" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.property.requiredCodeScanningTool"></a>

```go
func RequiredCodeScanningTool() RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList">RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList</a>

---

##### `RequiredCodeScanningToolInput`<sup>Optional</sup> <a name="RequiredCodeScanningToolInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.property.requiredCodeScanningToolInput"></a>

```go
func RequiredCodeScanningToolInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositoryRulesetRulesRequiredCodeScanning
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanning">RepositoryRulesetRulesRequiredCodeScanning</a>

---


### RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList <a name="RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.get"></a>

```go
func Get(index *f64) RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference <a name="RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.alertsThresholdInput">AlertsThresholdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.securityAlertsThresholdInput">SecurityAlertsThresholdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.toolInput">ToolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.alertsThreshold">AlertsThreshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.securityAlertsThreshold">SecurityAlertsThreshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.tool">Tool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlertsThresholdInput`<sup>Optional</sup> <a name="AlertsThresholdInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.alertsThresholdInput"></a>

```go
func AlertsThresholdInput() *string
```

- *Type:* *string

---

##### `SecurityAlertsThresholdInput`<sup>Optional</sup> <a name="SecurityAlertsThresholdInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.securityAlertsThresholdInput"></a>

```go
func SecurityAlertsThresholdInput() *string
```

- *Type:* *string

---

##### `ToolInput`<sup>Optional</sup> <a name="ToolInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.toolInput"></a>

```go
func ToolInput() *string
```

- *Type:* *string

---

##### `AlertsThreshold`<sup>Required</sup> <a name="AlertsThreshold" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.alertsThreshold"></a>

```go
func AlertsThreshold() *string
```

- *Type:* *string

---

##### `SecurityAlertsThreshold`<sup>Required</sup> <a name="SecurityAlertsThreshold" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.securityAlertsThreshold"></a>

```go
func SecurityAlertsThreshold() *string
```

- *Type:* *string

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.tool"></a>

```go
func Tool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RepositoryRulesetRulesRequiredDeploymentsOutputReference <a name="RepositoryRulesetRulesRequiredDeploymentsOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRulesetRulesRequiredDeploymentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositoryRulesetRulesRequiredDeploymentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.requiredDeploymentEnvironmentsInput">RequiredDeploymentEnvironmentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.requiredDeploymentEnvironments">RequiredDeploymentEnvironments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments">RepositoryRulesetRulesRequiredDeployments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequiredDeploymentEnvironmentsInput`<sup>Optional</sup> <a name="RequiredDeploymentEnvironmentsInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.requiredDeploymentEnvironmentsInput"></a>

```go
func RequiredDeploymentEnvironmentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequiredDeploymentEnvironments`<sup>Required</sup> <a name="RequiredDeploymentEnvironments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.requiredDeploymentEnvironments"></a>

```go
func RequiredDeploymentEnvironments() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositoryRulesetRulesRequiredDeployments
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments">RepositoryRulesetRulesRequiredDeployments</a>

---


### RepositoryRulesetRulesRequiredStatusChecksOutputReference <a name="RepositoryRulesetRulesRequiredStatusChecksOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRulesetRulesRequiredStatusChecksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositoryRulesetRulesRequiredStatusChecksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.putRequiredCheck">PutRequiredCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.resetDoNotEnforceOnCreate">ResetDoNotEnforceOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.resetStrictRequiredStatusChecksPolicy">ResetStrictRequiredStatusChecksPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequiredCheck` <a name="PutRequiredCheck" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.putRequiredCheck"></a>

```go
func PutRequiredCheck(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.putRequiredCheck.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDoNotEnforceOnCreate` <a name="ResetDoNotEnforceOnCreate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.resetDoNotEnforceOnCreate"></a>

```go
func ResetDoNotEnforceOnCreate()
```

##### `ResetStrictRequiredStatusChecksPolicy` <a name="ResetStrictRequiredStatusChecksPolicy" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.resetStrictRequiredStatusChecksPolicy"></a>

```go
func ResetStrictRequiredStatusChecksPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheck">RequiredCheck</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList">RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.doNotEnforceOnCreateInput">DoNotEnforceOnCreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheckInput">RequiredCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicyInput">StrictRequiredStatusChecksPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.doNotEnforceOnCreate">DoNotEnforceOnCreate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicy">StrictRequiredStatusChecksPolicy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks">RepositoryRulesetRulesRequiredStatusChecks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequiredCheck`<sup>Required</sup> <a name="RequiredCheck" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheck"></a>

```go
func RequiredCheck() RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList">RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList</a>

---

##### `DoNotEnforceOnCreateInput`<sup>Optional</sup> <a name="DoNotEnforceOnCreateInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.doNotEnforceOnCreateInput"></a>

```go
func DoNotEnforceOnCreateInput() interface{}
```

- *Type:* interface{}

---

##### `RequiredCheckInput`<sup>Optional</sup> <a name="RequiredCheckInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheckInput"></a>

```go
func RequiredCheckInput() interface{}
```

- *Type:* interface{}

---

##### `StrictRequiredStatusChecksPolicyInput`<sup>Optional</sup> <a name="StrictRequiredStatusChecksPolicyInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicyInput"></a>

```go
func StrictRequiredStatusChecksPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `DoNotEnforceOnCreate`<sup>Required</sup> <a name="DoNotEnforceOnCreate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.doNotEnforceOnCreate"></a>

```go
func DoNotEnforceOnCreate() interface{}
```

- *Type:* interface{}

---

##### `StrictRequiredStatusChecksPolicy`<sup>Required</sup> <a name="StrictRequiredStatusChecksPolicy" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicy"></a>

```go
func StrictRequiredStatusChecksPolicy() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositoryRulesetRulesRequiredStatusChecks
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks">RepositoryRulesetRulesRequiredStatusChecks</a>

---


### RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList <a name="RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRulesetRulesRequiredStatusChecksRequiredCheckList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.get"></a>

```go
func Get(index *f64) RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference <a name="RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resetIntegrationId">ResetIntegrationId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntegrationId` <a name="ResetIntegrationId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resetIntegrationId"></a>

```go
func ResetIntegrationId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.contextInput">ContextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationIdInput">IntegrationIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.context">Context</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationId">IntegrationId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.contextInput"></a>

```go
func ContextInput() *string
```

- *Type:* *string

---

##### `IntegrationIdInput`<sup>Optional</sup> <a name="IntegrationIdInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationIdInput"></a>

```go
func IntegrationIdInput() *f64
```

- *Type:* *f64

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.context"></a>

```go
func Context() *string
```

- *Type:* *string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationId"></a>

```go
func IntegrationId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RepositoryRulesetRulesTagNamePatternOutputReference <a name="RepositoryRulesetRulesTagNamePatternOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryruleset"

repositoryruleset.NewRepositoryRulesetRulesTagNamePatternOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositoryRulesetRulesTagNamePatternOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.resetNegate"></a>

```go
func ResetNegate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.negateInput">NegateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.negate">Negate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern">RepositoryRulesetRulesTagNamePattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.negateInput"></a>

```go
func NegateInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.negate"></a>

```go
func Negate() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositoryRulesetRulesTagNamePattern
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern">RepositoryRulesetRulesTagNamePattern</a>

---



